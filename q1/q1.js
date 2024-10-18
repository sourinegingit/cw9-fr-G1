const icon = document.querySelector(".icon");
const form = document.querySelector(".form");

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
  let name = document.getElementById("name").value;
  let password = document.getElementById("pss").value;
  let email = document.getElementById("email").value;
  let data={name,password,email};
  localStorage.setItem("user",JSON.stringify(data));
  
});
