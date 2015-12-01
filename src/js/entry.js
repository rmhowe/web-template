import '../css/app.scss';

import 'babel-core/polyfill';

document.addEventListener('DOMContentLoaded', () => {
  let greeting = document.createElement('span');
  greeting.textContent = "Hello, this is dog";
  document.getElementById('app').appendChild(greeting);
});
