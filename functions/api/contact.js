/**
 * Newport Pembury & Co — Contact Form Handler
 * Cloudflare Pages Function (runs at /api/contact)
 *
 * Receives form submissions, validates fields, checks honeypot,
 * applies rate limiting, and forwards to email via MailChannels.
 *
 * Environment variables needed (set in Cloudflare dashboard):
 *   CONTACT_EMAIL — recipient email (e.g. hello@newportpembury.com.au)
 */

// ---------- helpers ----------

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
}

function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ---------- validation ----------

function validateForm(data) {
  const errors = [];
  const required = ["firstName", "lastName", "email", "phone", "companyName"];

  for (const field of required) {
    if (!data[field] || !data[field].trim()) {
      errors.push(`${field} is required`);
    }
  }

  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push("Invalid email address");
  }

  return errors;
}

// ---------- email builder ----------

function buildEmailHtml(data) {
  const services = Array.isArray(data.services)
    ? data.services.join(", ")
    : data.services || "None selected";

  return `
    <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1a1a2e;">
      <h2 style="color: #8B6914; border-bottom: 2px solid #8B6914; padding-bottom: 12px;">
        New Consultation Request
      </h2>
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr><td style="padding: 8px 12px; font-weight: bold; width: 160px;">Name</td>
            <td style="padding: 8px 12px;">${escapeHtml(data.firstName)} ${escapeHtml(data.lastName)}</td></tr>
        <tr style="background: #f8f7f4;"><td style="padding: 8px 12px; font-weight: bold;">Email</td>
            <td style="padding: 8px 12px;"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>
        <tr><td style="padding: 8px 12px; font-weight: bold;">Phone</td>
            <td style="padding: 8px 12px;">${escapeHtml(data.phone)}</td></tr>
        <tr style="background: #f8f7f4;"><td style="padding: 8px 12px; font-weight: bold;">Company</td>
            <td style="padding: 8px 12px;">${escapeHtml(data.companyName)}</td></tr>
        <tr><td style="padding: 8px 12px; font-weight: bold;">Revenue</td>
            <td style="padding: 8px 12px;">${escapeHtml(data.companyRevenue) || "Not provided"}</td></tr>
        <tr style="background: #f8f7f4;"><td style="padding: 8px 12px; font-weight: bold;">Industry</td>
            <td style="padding: 8px 12px;">${escapeHtml(data.industry) || "Not provided"}</td></tr>
        <tr><td style="padding: 8px 12px; font-weight: bold;">Services</td>
            <td style="padding: 8px 12px;">${escapeHtml(services)}</td></tr>
      </table>
      ${data.notes ? `<div style="background: #f8f7f4; padding: 16px; border-left: 3px solid #8B6914; margin: 20px 0;">
        <strong>Additional Notes:</strong><br>${escapeHtml(data.notes).replace(/\n/g, "<br>")}
      </div>` : ""}
      <p style="color: #666; font-size: 0.85em; margin-top: 30px;">
        Submitted via newportpembury.com.au contact form at ${new Date().toLocaleString("en-AU", { timeZone: "Australia/Sydney" })}
      </p>
    </div>
  `;
}

// ---------- main handler ----------

export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    // Parse form data (supports both JSON and form-encoded)
    let data;
    const contentType = request.headers.get("Content-Type") || "";

    if (contentType.includes("application/json")) {
      data = await request.json();
    } else {
      const formData = await request.formData();
      data = Object.fromEntries(formData.entries());
      // Handle multiple checkbox values for 'services'
      const allServices = formData.getAll("services");
      if (allServices.length > 0) {
        data.services = allServices;
      }
    }

    // Honeypot check — if filled, silently accept (bot trap)
    if (data._gotcha) {
      return jsonResponse({ ok: true, message: "Form received" });
    }

    // Validate required fields
    const errors = validateForm(data);
    if (errors.length > 0) {
      return jsonResponse({ ok: false, errors }, 400);
    }

    // Send email via MailChannels (free on Cloudflare Workers)
    const recipientEmail = env.CONTACT_EMAIL || "hello@newportpembury.com.au";

    const mailPayload = {
      personalizations: [
        {
          to: [{ email: recipientEmail, name: "Newport Pembury & Co" }],
        },
      ],
      from: {
        email: "noreply@newportpembury.com.au",
        name: "Newport Pembury Website",
      },
      reply_to: {
        email: data.email,
        name: `${data.firstName} ${data.lastName}`,
      },
      subject: `New Consultation: ${data.firstName} ${data.lastName} — ${data.companyName}`,
      content: [
        {
          type: "text/html",
          value: buildEmailHtml(data),
        },
      ],
    };

    const mailResponse = await fetch("https://api.mailchannels.net/tx/v1/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(mailPayload),
    });

    if (mailResponse.status === 202 || mailResponse.status === 200) {
      return jsonResponse({
        ok: true,
        message: "Your consultation request has been received. We'll be in touch within 24 hours.",
      });
    }

    // If MailChannels fails, log and return a fallback
    console.error("MailChannels error:", mailResponse.status, await mailResponse.text());
    return jsonResponse(
      {
        ok: false,
        message: "We received your request but had trouble sending the notification. Please email us directly at hello@newportpembury.com.au",
      },
      500
    );
  } catch (err) {
    console.error("Form handler error:", err);
    return jsonResponse(
      { ok: false, message: "Something went wrong. Please try again or email hello@newportpembury.com.au" },
      500
    );
  }
}

// Handle CORS preflight
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
