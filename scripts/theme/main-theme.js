const switchBtn = document.querySelector('.switch-btn');
const themeStylesheet = document.querySelector('#theme-stylesheet');

switchBtn.addEventListener('click', function() {
  if (themeStylesheet.getAttribute('href') === '/assets/css/light-theme.css') {
    themeStylesheet.setAttribute('href', '/assets/css/dark-theme.css');
  } else {
    themeStylesheet.setAttribute('href', '/assets/css/light-theme.css');
  }
});

