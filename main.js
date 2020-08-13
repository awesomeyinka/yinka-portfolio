(function () {
  const $toggleButton = document.querySelector('.js-toggle-button');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const localStorageTheme = () => localStorage.getItem('theme') || 'light';

  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  systemTheme.addListener(($event) => {
    if ($event.matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  });

  const isDarkTheme = () =>
    document.documentElement.getAttribute('data-theme') === 'dark';

  const toggleTheme = () => {
    if (isDarkTheme()) {
      setTheme('light');
      $toggleButton.classList.remove('theme-switch--dark');
    } else {
      setTheme('dark');
      $toggleButton.classList.add('theme-switch--dark');
    }
  };

  $toggleButton.addEventListener('click', toggleTheme);

  if (localStorageTheme() === 'dark') {
    $toggleButton.classList.add('theme-switch--dark');
    setTheme(localStorageTheme());
  } else if (localStorageTheme() === 'light') {
    setTheme(localStorageTheme());
  } else if (systemTheme.matches) {
    setTheme('dark');
    $toggleButton.classList.add('theme-switch--dark');
  } else {
    setTheme('light');
  }
})();
