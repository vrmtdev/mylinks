function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const img = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
    img.setAttribute("alt", "Image of Satoru Gojo from anime Jujutsu Kaisen");
  } else {
    img.setAttribute("src", "./assets/avatar06.png");
    img.setAttribute(
      "alt",
      "Image of Fushiguro Toji from anime Jujutsu Kaisen"
    );
  }
}
