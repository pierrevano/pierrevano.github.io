document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("html, body, a");
  const preferences = localStorage.getItem("preferences");
  if (preferences === "nightmode") {
    elements.forEach((element) => {
      element.classList.add("nightmode");
    });
  }
  function toggleNightmode() {
    if (elements[0].classList.contains("nightmode")) {
      localStorage.removeItem("preferences");
      elements.forEach((element) => {
        element.classList.remove("nightmode");
      });
    } else {
      localStorage.setItem("preferences", "nightmode");
      elements.forEach((element) => {
        element.classList.add("nightmode");
      });
    }
  }
  document
    .querySelector("i.toggle-light")
    .addEventListener("click", toggleNightmode);
});
