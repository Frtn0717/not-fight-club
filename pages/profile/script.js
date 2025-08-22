const playerName = localStorage.getItem("player/name");
const playerWins = localStorage.getItem("player/wins");
const playerLoses = localStorage.getItem("player/loses");
const playerAvatar = localStorage.getItem("player/avatar");

const main = document.querySelector("main");
const statistics = document.querySelector(".statistics");
const avatarBlock = document.querySelector(".avatar");
const avatarEditButton = document.querySelector(".avatar__edit_btn");

const h1 = document.createElement("h1");
h1.className = "playerName";
h1.innerHTML = playerName;

main.prepend(h1);

const pWins = document.createElement("p");
const pLoses = document.createElement("p");

pWins.className = "wins";
pWins.innerHTML = `Wins: ${playerWins}`;

pLoses.className = "loses";
pLoses.innerHTML = `Loses: ${playerLoses}`;

statistics.append(pWins, pLoses);

const avatarImg = document.createElement("img");
avatarImg.setAttribute("src", `/assets/avatars/player/${playerAvatar}.png`);
avatarImg.setAttribute("alt", "Player avatar");

avatarBlock.prepend(avatarImg);

const avatarsContainer = document.createElement("div");
avatarsContainer.className = "hide";

const closeButton = document.createElement("div");
closeButton.className = "close-button";

const closeButtonIcon = document.createElement("img");
closeButtonIcon.setAttribute("src", "/assets/icons/close.png");
closeButtonIcon.setAttribute("alt", "Close button");
closeButtonIcon.className = "close-button-icon";

const avatars = ["human", "orc", "ne", "undead"];

avatars.forEach((avatar) => {
  const altAvatar = document.createElement("img");
  altAvatar.setAttribute("src", `/assets/avatars/player/${avatar}.png`);
  altAvatar.setAttribute("alt", "avatar");
  altAvatar.setAttribute("name", avatar);
  avatarsContainer.append(altAvatar);
});

main.append(avatarsContainer);

avatarsContainer.append(closeButton);
closeButton.append(closeButtonIcon);

avatarEditButton.addEventListener("click", () => {
  avatarsContainer.classList.remove("hide");
  avatarsContainer.classList.add("alt_avatars_container");
});

closeButton.addEventListener("click", () => {
  avatarsContainer.classList.remove("alt_avatars_container");
  avatarsContainer.classList.add("hide");
});

avatarsContainer.addEventListener("click", (e) => {
  e.target.name && localStorage.setItem("player/avatar", e.target.name);
  avatarsContainer.classList.remove("alt_avatars_container");
  avatarsContainer.classList.add("hide");
  avatarImg.setAttribute("src", `/assets/avatars/player/${e.target.name}.png`);
});
