function calculateIMC(event) {
  event.preventDefault();

  // 1. Capturar elementos
  const weightInput = document.getElementById("weight");
  const heightInput = document.getElementById("height");
  const resultBox = document.getElementById("result");
  const valueText = document.getElementById("imc-value");
  const descText = document.getElementById("imc-desc");

  // 2. Converter valores
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);

  // 3. Validar
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Por favor, preencha peso e altura com valores válidos.");
    return;
  }

  // 4. Calcular
  const imc = weight / (height * height);

  // 5. Definir classificação
  let classification = "";
  let color = "";

  if (imc < 18.5) {
    classification = "Abaixo do peso";
    color = "#e67e22"; // Laranja
  } else if (imc < 24.9) {
    classification = "Peso Normal";
    color = "#00b894"; // Verde
  } else if (imc < 29.9) {
    classification = "Sobrepeso";
    color = "#e67e22";
  } else {
    classification = "Obesidade";
    color = "#d63031"; // Vermelho
  }

  // 6. Atualizar a tela
  valueText.innerText = imc.toFixed(1);
  valueText.style.color = color;
  descText.innerText = classification;
  descText.style.color = color;

  // Mostrar caixa
  resultBox.classList.add("show");
}