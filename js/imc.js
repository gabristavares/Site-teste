function calculateIMC(event) { 
    event.preventDefault()
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const resultBox = document.getElementById('result');
    const valueText = document.getElementById('imc-value');
    const descText = document.getElementById('imc-desc');

    const weight = parseInt(weightInput.value);
    const height = parseFloat(heightInput.value);
    
    const imc = weight / (height * height);

    console.log(imc);

    if(weight <= 0 || height <= 0){
        alert("Por favor, preencha peso e altura com valores valido")
        return
    }

    let classification = ''
    let color = ''

    if(imc < 18.5){
        classification = "Abaixo do peso"
        color = "#e67e22"
    } else if (imc < 24.9) {
        classification = "Peso normal"
        color = "#00b894"
    } else if (imc < 29.9) {
        classification = "Sobrepeso"
        color = "#e67e22"
    } else {
        classification = "Obesidade"
        color = "#d63031"
    }   
    valueText.innerText = imc
    valueText.style.color = color

    descText.innerText = classification
    descText.style.color = color

}