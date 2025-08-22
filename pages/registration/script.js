import { redirect } from "../../main.js";

const usernameInput = document.getElementById("name");
const registrationButton = document.getElementById("registration_btn");

usernameInput.addEventListener("input", () => {
  if (usernameInput.value.trim() === "") {
    registrationButton.setAttribute("disabled", true);
  } else {
    registrationButton.removeAttribute("disabled");
  }
});

registrationButton.addEventListener("click", () => {
  const userName = usernameInput.value;
  localStorage.setItem("player/name", userName);
  localStorage.setItem("player/wins", 0);
  localStorage.setItem("player/loses", 0);
  localStorage.setItem("player/avatar", "human");
  redirect("main");
});
