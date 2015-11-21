import CedarContentful from './cdr-contentful';

var loginButton = document.getElementById('login-button');

cedarContentful = new CedarContentful();

loginButton.addEventListener('click', function() {
  cedarContentful.greet();
}, false);
