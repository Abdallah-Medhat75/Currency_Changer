myDiv = document.querySelector("div");
myInput = document.querySelector("input");

document.oninput = function () {
    myDiv.innerHTML = `${myInput.value} USD Dollars is ${(myInput.value * 40).toFixed(2)} Egyptian Pound`;
}