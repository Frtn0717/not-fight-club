const playerNameFromStorage = localStorage.getItem("player/name");

const main = document.querySelector("main");

const container = document.createElement("div");
const settingsField = document.createElement("p");
const playerName = document.createElement("p");
const editButton = document.createElement("input");

container.className = "container";
settingsField.className = "settings-field";
playerName.className = "player-name";
editButton.className = "edit-button";
editButton.setAttribute("type", "button");
editButton.setAttribute("value", "Edit");

settingsField.innerHTML = "Player name: ";
playerName.innerHTML = playerNameFromStorage;

container.append(settingsField, playerName, editButton);
main.append(container);
