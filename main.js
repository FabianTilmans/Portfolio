(({ buttonSelector = '.theme-switcher', documentClass = 'light-theme' } = {}) => {
  const button = document.querySelector(buttonSelector);
  if (!button || !window.CSS || !CSS.supports('top', 'var(--v)')) return;

  button.hidden = false;

  button.addEventListener('click', () => {
    const newTheme = localStorage.getItem('theme') ? '' : documentClass;

    localStorage.setItem('theme', newTheme);
    document.documentElement.className = newTheme;
  });
})();

resetForm = () => {
  document.contactForm.reset();
}
