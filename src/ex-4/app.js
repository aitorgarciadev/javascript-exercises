document.getElementById("sumForm").addEventListener("submit", function (event) {
  event.preventDefault();
  let number1 = parseFloat(document.getElementById("number1").value);
  let number2 = parseFloat(document.getElementById("number2").value);

  let sum = number1 + number2;

  document.getElementById("result").textContent =
    "La suma de " + number1 + " con " + number2 + " es " + sum;
});
