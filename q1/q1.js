const icon = document.querySelector(".icon");
const form = document.querySelector(".form");
let inputName = document.getElementById("name");
let inputPassword = document.getElementById("pss");
let inputEmail = document.getElementById("email");

let submit = document.getElementById("submit");
icon.addEventListener("click", () => {
  changeFormTheme(form);
});

function changeFormTheme(form) {
  let theme = form.getAttribute("data-theme");
  const localtheme = localStorage.getItem("theme");

  if (localtheme === "dark") {
    form.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  } else {
    form.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  updateUser();
  clearForm(form);
});

function clearForm(form) {
  form.reset();
}

function updateUser() {
  let nameValue = inputName.value;
  let passwordValue = inputPassword.value;
  let emailValue = inputEmail.value;

  let data = { name: nameValue, password: passwordValue, email: emailValue };
  localStorage.setItem("user", JSON.stringify(data));
}
function setCookie(name, value, hours) {
  const expires = new Date(Date.now() + hours * 60 * 60 * 1000).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}
let data = JSON.parse(localStorage.getItem("user"));
console.log(data);
setCookie("myweb", JSON.stringify(data), 24);
