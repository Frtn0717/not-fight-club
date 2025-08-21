import { redirect } from "../../main.js";

const usernameInput = document.getElementById("name");
const registrationButton = document.getElementById("registration_btn");

registrationButton.addEventListener("click", () => {
  const userName = usernameInput.value;
  localStorage.setItem("userName", userName);
  redirect("main");
});
