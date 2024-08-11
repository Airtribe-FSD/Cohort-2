document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("toggleButton");

  button.title = "Click to turn OFF";

  button.addEventListener("click", function () {
    if (button.textContent === "ON") {
      button.textContent = "OFF";
      button.title = "Click to turn ON";
    } else {
      button.textContent = "ON";
      button.title = "Click to turn OFF";
    }
  });
});
