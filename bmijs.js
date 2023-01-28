var heightInput = document.querySelector(".height-input-field");
var weightInput = document.querySelector(".weight-input-field");
var calculateButton = document.querySelector(".calculate");
var result = document.querySelector(".result");
var statement = document.querySelector(".result-statement");
var BMI, height, weight;

calculateButton.addEventListener("click", () => {

    height = heightInput.value;
    weight = weightInput.value;
    BMI = weight / (height ** 2);
    result.value = BMI;

    if (document.getElementById('M').checked) {
        if (BMI < 18.5) {
            statement.innerText = "Your BMI falls within the underweight range";
        } else if ((BMI > 18.5) && (BMI < 24.9)) {
            statement.innerText = "Your BMI falls within the normal or healthy weight range";
        } else if ((BMI > 25) && (BMI < 29.9)) {
            statement.innerText = "Your BMI falls within the overweight range";
        } else {
            statement.innerText = "Your BMI falls within the obese range";
        }
    }
    else if (document.getElementById('F').checked) {
        if (BMI < 17) {
            statement.innerText = "Your BMI falls within the underweight range";
        } else if ((BMI > 17) && (BMI < 23.5)) {
            statement.innerText = "Your BMI falls within the normal or healthy weight range";
        } else if ((BMI > 23.5) && (BMI < 29.9)) {
            statement.innerText = "Your BMI falls within the overweight range";
        } else {
            statement.innerText = "Your BMI falls within the obese range";
        }

    }
});