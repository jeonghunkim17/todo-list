const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".input_user-name");
const greeting = document.querySelector(".greeting");
const login = document.querySelector(".login");

const contants = document.querySelector(".contants");
const user = document.querySelector(".user");

const USERNAME_KEY = "username";
const HIDDEN_KEY = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;

  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.innerText = `Hello! ${username}!`;
  //user.innnerText = `${username}'s page`;

  // setTimeout(function () {
  //   greeting.classList.add("fadeIn");
  // }, 700);

  // setTimeout(function () {
  //   greeting.classList.remove("fadeIn");
  //   greeting.classList.add("fadeOut");
  // }, 2000);

  // setTimeout(function () {
  //   login.style.display = "none";
  // }, 2500);

  // setTimeout(function () {
  //   contants.classList.add("fadeIn");
  // }, 2500);

  // loginForm.classList.add("fadeOut");
  // clockForm.classList.add("fadeOut");
  // setTimeout(displayNone, 500);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);
const clockForm = document.querySelector(".clock");

function displayNone() {
  loginForm.classList.add(HIDDEN_KEY);
  clockForm.classList.add(HIDDEN_KEY);
}

if (savedUserName === null) {
  loginForm.addEventListener("submit", onLoginSubmit);
} else if (savedUserName !== null) {
  // displayNone();
  // loginForm.classList.add("fadeIn");
  // clockForm.classList.add("fadeIn");
  paintGreeting(savedUserName);
}
