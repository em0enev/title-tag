import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });

  const title =  document.querySelector("title")
  title.innerText = "No new messages";

  setTimeout(() => {
    title.innerHTML = "One new message"
  }, 3000)
});
