const playerName = localStorage.getItem("player/name");
const playerWins = localStorage.getItem("player/wins");
const playerLoses = localStorage.getItem("player/loses");

const main = document.querySelector("main");
const statistics = document.querySelector(".statistics");

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
