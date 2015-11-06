require('font-awesome/css/font-awesome.css');
require('../css/app.scss');

require('babel-core/polyfill');

document.addEventListener('DOMContentLoaded', () => {
  let container = document.createElement('div');
  let text = document.createElement('span');
  text.textContent = "Hello, this is dog ";
  let icon = document.createElement('i');
  icon.className = "fa fa-paw";
  container.appendChild(text);
  container.appendChild(icon);
  document.getElementById('app').appendChild(container);
});