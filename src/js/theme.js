// DOM Elements
const refs = {
  switchToggle: document.querySelector('#theme-switch-toggle'),
  body: document.body,
};

let savedTheme = localStorage.getItem('theme');

// Object theme
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// Listener on input
refs.switchToggle.addEventListener('change', onSwitchToggleClick);

// Check theme when window load
window.addEventListener('load', currentTheme);

// Check if dark-theme is enabled
// if it's enabled, turn it off
// if it's disabled, turn it on
function onSwitchToggleClick(event) {
  event.currentTarget.checked ? enableDarkTheme() : enableLightTheme();
}

function toggleTheme(add, remove) {
  refs.body.classList.remove(remove);
  refs.body.classList.add(add);
  // Update theme in the localStorage
  localStorage.setItem('theme', add);
}

function enableDarkTheme() {
  toggleTheme(Theme.DARK, Theme.LIGHT);
  refs.switchToggle.checked = true;
}

function enableLightTheme() {
  toggleTheme(Theme.LIGHT, Theme.DARK);
  refs.switchToggle.checked = false;
}

function currentTheme() {
  if (savedTheme === Theme.LIGHT || savedTheme === null) {
    enableLightTheme();
    return;
  }

  if (savedTheme === Theme.DARK) {
    enableDarkTheme();
    return;
  }
}
