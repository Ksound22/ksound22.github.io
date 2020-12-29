let theme = localStorage.getItem("theme");

if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    // console.log("Option clicked", mode);
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-style").href = "default.css";
  }
  if (mode == "blue") {
    document.getElementById("theme-style").href = "blue.css";
  }
  if (mode == "green") {
    document.getElementById("theme-style").href = "green.css";
  }
  if (mode == "purple") {
    document.getElementById("theme-style").href = "purple.css";
  }

  localStorage.setItem("theme", mode);
}

// Name animation
let text = document.querySelector("#anim");
// console.log(text);

let strText = text.textContent;
// console.log(strText);

const splitText = strText.split("");
// console.log(splitText);

text.textContent = "";
for (i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  const span = text.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  if (char === splitText.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}

// Scroll to top script
const ScrollToTop = document.querySelector("#ScrollToTop");

ScrollToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Firebase DB
var firebaseConfig = {
  apiKey: "AIzaSyDmJhSSJ_h3tcBHAzJXhqkkP4s0ANpcna0",
  authDomain: "portfoliodb-7c728.firebaseapp.com",
  projectId: "portfoliodb-7c728",
  storageBucket: "portfoliodb-7c728.appspot.com",
  messagingSenderId: "109717430211",
  appId: "1:109717430211:web:e5df0fb3ce59bd36fbe776",
  measurementId: "G-D7KW2WH550",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref("messages");

document.getElementById("contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getInputVal("name");
  var email = getInputVal("email");
  var message = getInputVal("message");

  // Save Message
  saveMessage(name, email, message);

  // // ShowAlert
  document.querySelector(".alert").style.display = "block";

  // // Hide after some seconds
  setTimeout(function () {
    document.querySelector(".alert").style.display = "none";
  }, 5000);
  document.getElementById("contact-form").reset();
}

// get inputs
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save messages to firebase real time database
function saveMessage(name, email, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message,
  });
}

// Smooth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});
