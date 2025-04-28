let myDiv = document.querySelector("div");
let myInput = document.querySelector("input");
let mySelect = document.querySelector("select");



document.oninput = function () {
    if (myInput.value != "")
    {
        if (mySelect.value == "USD") {
            myDiv.innerHTML = `${myInput.value} USD Dollars is ${(myInput.value * 50.38).toFixed(2)} Egyptian Pound`;
        } else if (mySelect.value == "EUR") {
            myDiv.innerHTML = `${myInput.value} EURO Euros is ${(myInput.value * 57.89).toFixed(2)} Egyptian Pound`;
        } else if (mySelect.value == "GBP") {
            myDiv.innerHTML = `${myInput.value} England Pounds is ${(myInput.value * 68.10).toFixed(2)} Egyptian Pound`;
        } else if (mySelect.value == "SAR") {
            myDiv.innerHTML = `${myInput.value} Saudi Reals is ${(myInput.value * 13.55).toFixed(2)} Egyptian Pound`;
        } else if (mySelect.value == "AED") {
            myDiv.innerHTML = `${myInput.value} Emirates Currency is ${(myInput.value * 13.84).toFixed(2)} Egyptian Pound`;
        }    
    }
}