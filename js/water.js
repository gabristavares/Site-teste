let currentWater = 0;
const waterGoal = 2500;

function addWater(amount) {
  currentWater += amount;
  updateInterface();
}

function resetWater() {
  currentWater = 0;
  updateInterface();
}

function updateInterface() {
  const bar = document.getElementById("water-bar");
  const totalText = document.getElementById("water-total");

  // Cálculo da porcentagem
  const percentage = (currentWater / waterGoal) * 100;

  // Atualiza Texto
  totalText.innerText = currentWater;

  // Atualiza Barra (CSS Width)
  bar.style.width = `${Math.min(percentage, 100)}%`;
  bar.innerText = `${Math.round(percentage)}%`;

  // Feedback visual de meta atingida
  if (currentWater >= waterGoal) {
    bar.style.backgroundColor = "#00b894"; // Verde
    bar.innerText = "Meta Atingida!";
  } else {
    bar.style.backgroundColor = "#0984e3"; // Azul
  }
}