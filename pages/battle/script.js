const enemies = ["Demon Hunter", "Death Knight", "Black Hand"];
const chestParts = ["Head", "Neck", "Body", "Belly", "Legs"];
const playerNameFromStorage = localStorage.getItem("player/name");
const playerAvatarFromStorage = localStorage.getItem("player/avatar");
const enemyNameFromStorage = localStorage.getItem("enemy/name");
const enemyAvatarFromStorage = localStorage.getItem("enemy/avatar");

const battleField = document.querySelector(".battle-field");
const log = document.querySelector(".log");

const playerSection = document.createElement("div");
const fightSection = document.createElement("div");
const enemySection = document.createElement("div");

const playerName = document.createElement("p");
const playerAvatar = document.createElement("img");
const playerHealthBar = document.createElement("div");
const playerRemainingHealth = document.createElement("div");
const playerTotalHealth = document.createElement("div");
const playerHealthText = document.createElement("p");

const enemyName = document.createElement("p");
const enemyAvatar = document.createElement("img");
const enemyHealthBar = document.createElement("div");
const enemyRemainingHealth = document.createElement("div");
const enemyTotalHealth = document.createElement("div");
const enemyHealthText = document.createElement("p");

const combatTitle = document.createElement("p");
const attackSection = document.createElement("div");
const defenseSection = document.createElement("div");
const attackTitle = document.createElement("p");
const defenseTitle = document.createElement("p");
const fightButton = document.createElement("input");

playerSection.className = "player";
fightSection.classList = "fight";
enemySection.className = "enemy";

fightButton.setAttribute("type", "button");
fightButton.setAttribute("value", "Fight!");

battleField.append(playerSection, fightSection, enemySection);

playerSection.append(
  playerName,
  playerAvatar,
  playerHealthBar,
  playerHealthText
);

playerHealthBar.append(playerTotalHealth, playerRemainingHealth);

enemySection.append(enemyName, enemyAvatar, enemyHealthBar, enemyHealthText);

enemyHealthBar.append(enemyTotalHealth, enemyRemainingHealth);

// TODO attack section and defense section

playerName.innerHTML = playerNameFromStorage;
playerAvatar.setAttribute(
  "src",
  `/assets/avatars/player/${playerAvatarFromStorage}.png`
);
playerAvatar.setAttribute("alt", "Player avatar");

playerHealthBar.className = "player-health-bar";
playerTotalHealth.className = "player-total-health";
playerRemainingHealth.className = "player-remaining-health";
playerHealthText.className = "player-health-text";

playerHealthText.innerHTML = "150 / 150";

enemyName.innerHTML = enemyNameFromStorage;
enemyAvatar.setAttribute(
  "src",
  `/assets/avatars/enemies/${enemyAvatarFromStorage}.png`
);
enemyAvatar.setAttribute("alt", "Enemy avatar");

enemyHealthBar.className = "enemy-health-bar";
enemyTotalHealth.className = "enemy-total-health";
enemyRemainingHealth.className = "enemy-remaining-health";
enemyHealthText.className = "enemy-health-text";

enemyHealthText.innerHTML = "150 / 150";
