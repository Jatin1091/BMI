var hI = document.querySelector(".height-input");
var wI = document.querySelector(".weight-input");
var cal = document.querySelector(".cal");
var res = document.querySelector(".res");
var statement = document.querySelector(".statement");
var BMI, height, weight;

cal.addEventListener("click", () => {

    height = hI.value;
    weight = wI.value;
    BMI = weight / (height ** 2);
    res.value = BMI;

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