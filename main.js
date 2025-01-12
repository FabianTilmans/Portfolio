(({ buttonSelector = '.theme-switcher', documentClass = 'light-theme' } = {}) => {
  const button = document.querySelector(buttonSelector);
  console.log(button);
  if (!button || !window.CSS || !CSS.supports('top', 'var(--v)')) return;

  button.hidden = false;

  button.addEventListener('click', () => {
    console.log("test");;
    const newTheme = localStorage.getItem('theme') ? '' : documentClass;

    localStorage.setItem('theme', newTheme);
    document.documentElement.className = newTheme;
  });
})();

resetForm = () => {
  document.contactForm.reset();
}
