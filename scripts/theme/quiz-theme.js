function toggleSwitch() {
  var linkElement = document.querySelector('link[href="/assets/css/light-theme.css"]');
  if (linkElement) {
    linkElement.setAttribute('href', '/assets/css/dark-theme.css');
  } else {
    linkElement = document.querySelector('link[href="/assets/css/dark-theme.css"]');
    linkElement.setAttribute('href', '/assets/css/light-theme.css');
  }
}
