import { redirect } from "../../main.js";

const usernameInput = document.getElementById("name");
const registrationButton = document.getElementById("registration_btn");

registrationButton.addEventListener("click", () => {
  const userName = usernameInput.value;
  localStorage.setItem("player/name", userName);
  localStorage.setItem("player/wins", 0);
  localStorage.setItem("player/loses", 0);
  localStorage.setItem("player/avatar", "human");
  redirect("main");
});
