const playerName = localStorage.getItem("player/name");
const playerWins = localStorage.getItem("player/wins");
const playerLoses = localStorage.getItem("player/loses");
const playerAvatar = localStorage.getItem("player/avatar");

const main = document.querySelector("main");
const statistics = document.querySelector(".statistics");
const avatarBlock = document.querySelector(".avatar");

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
