// Theme Toggle Script - Persistent light/dark mode switcher
(function() {
  'use strict';

  // Get saved theme or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';

  // Apply theme on page load (before render to prevent flash)
  if (savedTheme === 'light') {
    document.documentElement.classList.add('light-theme');
    document.body.classList.add('light-theme');
  }

  // Wait for DOM to be ready
  function initThemeToggle() {
    // Create toggle button
    const toggleButton = document.createElement('button');
    toggleButton.className = 'theme-toggle';
    toggleButton.setAttribute('aria-label', 'Toggle theme');
    toggleButton.setAttribute('title', 'Toggle light/dark theme');

    // Set initial icon based on current theme
    updateToggleIcon(toggleButton, savedTheme);

    // Add click handler
    toggleButton.addEventListener('click', function() {
      const isLight = document.body.classList.contains('light-theme');
      const newTheme = isLight ? 'dark' : 'light';

      // Toggle theme classes
      document.documentElement.classList.toggle('light-theme');
      document.body.classList.toggle('light-theme');

      // Save preference
      localStorage.setItem('theme', newTheme);

      // Update icon
      updateToggleIcon(toggleButton, newTheme);
    });

    // Add button to page
    document.body.appendChild(toggleButton);
  }

  // Update button icon based on current theme
  function updateToggleIcon(button, theme) {
    if (theme === 'light') {
      button.innerHTML = '🌙'; // Moon for switching to dark
      button.setAttribute('aria-label', 'Switch to dark theme');
    } else {
      button.innerHTML = '☀️'; // Sun for switching to light
      button.setAttribute('aria-label', 'Switch to light theme');
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeToggle);
  } else {
    initThemeToggle();
  }
})();
