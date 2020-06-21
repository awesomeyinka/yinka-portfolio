//Hamburger
const $menu = document.querySelector('.hamburger');
const $nav = document.querySelector('.nav');

function toggleHamburger() {
  $menu.classList.toggle('hamburger--is-open');
  $nav.classList.toggle('nav--is-open');
}

$menu.addEventListener('click', toggleHamburger);

//Set theme
const $toggleButton = document.querySelector('.js-toggle-button');
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

const setTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
};

const theme = () => localStorage.getItem('theme');

if (theme() === 'dark') {
  $toggleButton.classList.add('theme-switch--dark');
  setTheme(theme());
} else if (theme() === 'light') {
  setTheme(theme());
} else if (prefersDarkMode.matches) {
  setTheme('dark');
  $toggleButton.classList.add('theme-switch--dark');
} else {
  setTheme('light');
}

prefersDarkMode.addListener(($event) => {
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
