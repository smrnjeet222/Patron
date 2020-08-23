let themeDots = document.querySelectorAll(".theme-dot");

let theme = localStorage.getItem("theme");

if (theme) {
  document.getElementById("theme-style").href = `css/${theme}.css`;
}

themeDots.forEach((theme) => {
  theme.addEventListener("click", (e) => {
    let m = theme.getAttribute("data-mode");
    localStorage.setItem("theme", m);
    document.getElementById("theme-style").href = `css/${m}.css`;
  });
});
