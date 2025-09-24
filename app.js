document.body.innerHTML;
//alert("hello mulit media designers");
console.log("hello multi media designere");

//funktion der siger hej "navn, alder og mail"
function sayHello() {
  document.querySelector("h3").textContent = "Hej" + document.querySelector("#name").value + document.querySelector("#age").value
  + document.querySelector("#mail").value;
}

//button
document.querySelector("button").addEventListener("click", sayHello);
