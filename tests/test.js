// const { expect } = require('chai');

// // Import your code which to be tested

// // Initialize static data

// /**
// describe('description of the test', () => {
//   it('details of the specific test', () => {
//     expect(0).to.equal(0);
//   });
// });
// **/

const CookieCrud = require('../index');

const Cookie = new CookieCrud();
// Cookie.connect('./Cookies');

// Cookie.readCookie('mail.google.com');

chrome = Cookie.getChrome();
console.log(chrome);
chrome.getCookie()