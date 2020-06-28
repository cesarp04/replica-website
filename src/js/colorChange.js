const buttonHome = document.getElementById("btn-home");
const buttonAbout = document.getElementById("btn-about");
const buttonBriefcase = document.getElementById("btn-briefcase");
const buttonBlog = document.getElementById("btn-blog");
const buttonContact = document.getElementById("btn-contact");

let randomValue = () => Math.floor(Math.random() * 256);
let stringRgb = () =>
  `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;

let countHome = 0;
let countAbout = 0;
let countBriefcase = 0;
let countBlog = 0;
let countContact = 0;

function colorHome(item) {
  buttonHome.style.backgroundColor = stringRgb();
  countHome++;
  console.log(`id: ${item.id}   count: ${countHome}`);
}

function colorAbout(item) {
  buttonAbout.style.backgroundColor = stringRgb();
  countAbout++;
  console.log(`id: ${item.id}   count: ${countAbout}`);
}

function colorBriefcase(item) {
  buttonBriefcase.style.backgroundColor = stringRgb();
  countBriefcase++;
  console.log(`id: ${item.id}   count: ${countBriefcase}`);
}

function colorBlog(item) {
  buttonBlog.style.backgroundColor = stringRgb();
  countBlog++;
  console.log(`id: ${item.id}   count: ${countBlog}`);
}

function colorContact(item) {
  buttonContact.style.backgroundColor = stringRgb();
  countContact++;
  console.log(`id: ${item.id}   count: ${countContact}`);
}

module.exports = randomValue;
