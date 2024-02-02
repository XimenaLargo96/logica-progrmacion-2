
const inputTemp1 = document.getElementById("temp1");
const selectTem1 = document.getElementById("inputGroupSelect01");
const inputTemp2 = document.getElementById("temp2");
const selectTem2 = document.getElementById("inputGroupSelect02");
const btnConvertir = document.getElementById("btn-convertir");


btnConvertir.addEventListener("click", function() {
    var temp1Value = parseFloat(inputTemp1.value); 
    var temp1Unit = parseInt(selectTem1.value);
    var temp2Unit = parseInt(selectTem2.value);
    var temp2Value = 0;
    
    console.log(selectTem1.value);
    if (temp1Unit === temp2Unit) {
        temp2Value = temp1Value;
    } 
    else if (temp1Unit === 1 && temp2Unit === 2) {
        temp2Value = (temp1Value * 9/5) + 32; 
    } 
    else if (temp1Unit === 1 && temp2Unit === 3) {
        temp2Value = temp1Value + 273.15; 
    } 
    else if (temp1Unit === 2 && temp2Unit === 1) {
        temp2Value = (temp1Value - 32) * 5/9; 
    } 
    else if (temp1Unit === 2 && temp2Unit === 3) {
        temp2Value = (temp1Value - 32) * 5/9 + 273.15; 
    } 
    else if (temp1Unit === 3 && temp2Unit === 1) {
        temp2Value = temp1Value - 273.15; 
    } 
    else if (temp1Unit === 3 && temp2Unit === 2) {
        temp2Value = (temp1Value - 273.15) * 9/5 + 32; 
    }
    inputTemp2.value = temp2Value.toFixed(2);
});