require('../css/app.scss');

require('babel-core/polyfill');

document.addEventListener('DOMContentLoaded', () => {
  let greeting = document.createElement('span');
  greeting.textContent = "Hello, this is dog";
  document.getElementById('app').appendChild(greeting);
});