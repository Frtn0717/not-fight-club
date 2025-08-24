const enemies = ["Demon Hunter", "Death Knight", "Black Hand"];

const startFightBtn = document.querySelector(".main_button");

const chooseEnemy = () => {
  const minIndex = 0;
  const maxIndex = enemies.length - 1;
  const randomIndex =
    Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;
  return enemies[randomIndex];
};

const enemy = chooseEnemy();

startFightBtn.addEventListener("click", () => {
  localStorage.setItem("enemy/name", enemy);
  localStorage.setItem("enemy/avatar", enemy);
  localStorage.setItem("isFightBegun", true);
  location.replace("/pages/battle/battle.html");
});
