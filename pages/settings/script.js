const playerNameFromStorage = localStorage.getItem("player/name");

const main = document.querySelector("main");

const container = document.createElement("div");
const settingsField = document.createElement("p");
const playerName = document.createElement("p");
const editButton = document.createElement("input");
const nameEnterField = document.createElement("input");
const saveButton = document.createElement("input");

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

nameEnterField.setAttribute("type", "text");
nameEnterField.setAttribute("value", playerNameFromStorage);
nameEnterField.className = "name-enter-field";
saveButton.setAttribute("type", "button");
saveButton.setAttribute("value", "Save");
saveButton.className = "save-button";

editButton.addEventListener("click", () => {
  playerName.remove();
  editButton.remove();
  settingsField.after(nameEnterField, saveButton);
});

saveButton.addEventListener("click", () => {
  const newPlayerName = nameEnterField.value;
  nameEnterField.remove();
  saveButton.remove();
  settingsField.after(playerName, editButton);
  playerName.innerHTML = newPlayerName;
  localStorage.setItem("player/name", newPlayerName);
});
