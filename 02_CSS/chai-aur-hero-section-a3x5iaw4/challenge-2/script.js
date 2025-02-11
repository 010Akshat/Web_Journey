const toggle = document.getElementById('darkModeToggle');
const body = document.body;
const demoButton = document.querySelector('.demo-button');

// Load saved mode from localStorage
const darkMode = localStorage.getItem('dark-mode');
if (darkMode === 'enabled') {
  body.classList.add('dark');
  demoButton.classList.add('dark');
}

toggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  demoButton.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    localStorage.setItem('dark-mode', 'enabled');
  } else {
    localStorage.setItem('dark-mode', 'disabled');
  }
});
