// Добавь функционал изменения темы при нажатии (событие change) на чекбокс #theme-switch-toggle в тулбаре.

// По умолчанию тема светлая.
// При изменении темы, необходимо добавлять на элемент body класс light-theme или dark-theme.
// Выбранная тема должна сохраняться между перезагрузками страницы. Для хранения темы используй localStorage.
// Если при загрузке страницы тема тёмная, не забудь поставить свойство checked у чекбокса #theme-switch-toggle в true, чтобы ползунок сдвинулся в правильное положение.

// DOM Elements
const refs = {
  switchToggle: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
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

function enableDarkTheme() {
  // 1. Add the class dark-theme to the body
  refs.body.classList.add(Theme.DARK);
  refs.body.classList.remove(Theme.LIGHT);
  // 2. Update dark-theme in the localStorage
  localStorage.setItem('theme', Theme.DARK);
  refs.switchToggle.checked = true;
}

function enableLightTheme() {
  // 1. Add the class light-theme to the body
  refs.body.classList.add(Theme.LIGHT);
  refs.body.classList.remove(Theme.DARK);
  // 2. Update light-theme in the localStorage
  localStorage.setItem('theme', Theme.LIGHT);
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
