// Theme Toggle — Two-state light/dark switch
// Loads before DOM to prevent FOUC (Flash of Unstyled Content)
(function() {
  const THEME_KEY = 'np-theme-preference';

  // Resolve effective theme: saved preference or OS default
  function getEffectiveTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  // Apply immediately to prevent flash
  document.documentElement.setAttribute('data-theme', getEffectiveTheme());

  // Full init after DOM ready
  function init() {
    const theme = getEffectiveTheme();
    document.documentElement.setAttribute('data-theme', theme);
    updateToggleUI(theme);

    // Listen for OS preference changes (only matters if user hasn't set a manual preference)
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (!localStorage.getItem(THEME_KEY)) {
        const newTheme = getEffectiveTheme();
        document.documentElement.setAttribute('data-theme', newTheme);
        updateToggleUI(newTheme);
      }
    });

    // Click handler — single button toggles between states
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.theme-toggle-btn');
      if (!btn) return;
      const current = document.documentElement.getAttribute('data-theme') || getEffectiveTheme();
      const next = current === 'dark' ? 'light' : 'dark';
      localStorage.setItem(THEME_KEY, next);
      document.documentElement.setAttribute('data-theme', next);
      updateToggleUI(next);
    });

    // Keyboard support — Enter and Space
    document.addEventListener('keydown', (e) => {
      const btn = e.target.closest('.theme-toggle-btn');
      if (!btn) return;
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  }

  function updateToggleUI(theme) {
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
      const sunIcon = btn.querySelector('.icon-sun');
      const moonIcon = btn.querySelector('.icon-moon');
      if (sunIcon && moonIcon) {
        sunIcon.style.opacity = theme === 'light' ? '0' : '1';
        sunIcon.style.transform = theme === 'light' ? 'rotate(-90deg) scale(0)' : 'rotate(0) scale(1)';
        moonIcon.style.opacity = theme === 'light' ? '1' : '0';
        moonIcon.style.transform = theme === 'light' ? 'rotate(0) scale(1)' : 'rotate(90deg) scale(0)';
      }
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
