const icon = document.querySelector(".icon");
const form = document.querySelector(".form");
icon.addEventListener("click", () => {
  changeFormTheme(form);
});

function changeFormTheme(form) {
  let theme = form.getAttribute("data-theme");
const localtheme=localStorage.getItem("theme");

  if (localtheme === "dark") {
    form.setAttribute("data-theme", "light");
    localStorage.setItem("theme","light")
  } else {
    form.setAttribute("data-theme", "dark");
    localStorage.setItem("theme","dark")

  }
}
