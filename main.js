const isUserRegistered = localStorage.getItem("player/name");
const isFightBegun = localStorage.getItem("isFightBegun");

export const redirect = (page) => {
  switch (page) {
    case "registration":
      location.href = "/pages/registration/registration.html";
      break;
    case "profile":
      location.href = "/pages/profile/profile.html";
      break;
    case "settings":
      location.href = "/pages/settings/settings.html";
      break;
    case "battle":
      location.href = "/pages/battle/battle.html";
      break;
    default:
      location.href = "/pages/main/main.html";
      break;
  }
};

if (
  !isUserRegistered &&
  location.pathname !== "/pages/registration/registration.html"
) {
  redirect("registration");
}

if (isUserRegistered && isFightBegun) redirect("battle");
