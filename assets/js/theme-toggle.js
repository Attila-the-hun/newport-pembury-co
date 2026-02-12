// Theme Toggle Script - Load ASAP to prevent FOUC (Flash of Unstyled Content)
(function() {
  const THEME_KEY = 'np-theme-preference';

  // Immediately apply saved theme before DOM is ready (prevents flash)
  function applyThemeSync() {
    const saved = localStorage.getItem(THEME_KEY) || 'auto';

    if (saved === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else if (saved === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    }
    // 'auto' means no attribute - let prefers-color-scheme handle it
  }

  // Call immediately (inline script should run before other scripts)
  applyThemeSync();

  // Full initialization on DOMContentLoaded
  function init() {
    const THEME_KEY = 'np-theme-preference';

    function getSystemTheme() {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function applyTheme(preference) {
      // preference: 'light', 'dark', or 'auto'
      if (preference === 'auto') {
        document.documentElement.removeAttribute('data-theme');
      } else {
        document.documentElement.setAttribute('data-theme', preference);
      }

      // Update toggle UI active state
      document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === preference);
      });

      // Update meta theme-color for browser chrome
      const isDark = preference === 'dark' ||
                     (preference === 'auto' && getSystemTheme() === 'dark');
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', isDark ? '#0D1520' : '#1B2838');
      }
    }

    // Get initial preference from localStorage, default to 'auto'
    const saved = localStorage.getItem(THEME_KEY) || 'auto';
    applyTheme(saved);

    // Listen for OS theme changes (relevant when in auto mode)
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeQuery.addEventListener('change', () => {
      const current = localStorage.getItem(THEME_KEY) || 'auto';
      if (current === 'auto') {
        applyTheme('auto');
      }
    });

    // Bind click handlers to all theme toggle buttons
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.theme-btn');
      if (btn) {
        const theme = btn.dataset.theme;
        localStorage.setItem(THEME_KEY, theme);
        applyTheme(theme);
      }
    });

    // Keyboard navigation support (arrow keys)
    document.addEventListener('keydown', (e) => {
      const btn = e.target.closest('.theme-btn');
      if (!btn) return;

      const container = btn.closest('.theme-toggle');
      if (!container) return;

      const buttons = Array.from(container.querySelectorAll('.theme-btn'));
      const currentIndex = buttons.indexOf(btn);

      let nextBtn = null;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        nextBtn = buttons[(currentIndex + 1) % buttons.length];
        e.preventDefault();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        nextBtn = buttons[(currentIndex - 1 + buttons.length) % buttons.length];
        e.preventDefault();
      }

      if (nextBtn) {
        const theme = nextBtn.dataset.theme;
        localStorage.setItem(THEME_KEY, theme);
        applyTheme(theme);
        nextBtn.focus();
      }
    });
  }

  // Wait for DOM to be ready before binding events
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
