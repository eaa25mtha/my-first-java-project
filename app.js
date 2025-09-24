document.body.innerHTML += "hello javascript";
//alert("hello mulit media designers");
console.log("hello multi media designere");

//funktion når man trykker på knappen
function sayHello() {
  document.querySelector("h3").textContent =
    "Hej" + document.queryselector("input").value;
}

document.querySelector("button").addEventListener("click", sayHello);
