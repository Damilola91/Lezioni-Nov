//Prompt due numeri

const sommaNumeri = () => {
  let num1 = prompt("Enter the first number:");
  let num2 = prompt("Enter the second number:");

  let sum = Number(num1) + Number(num2);

  alert("The sum is: " + sum);
};

sommaNumeri();

// Creazione Array nomi

let names = ["Dami", "Lola", "Pinco", "Pallino"];

for (let i = 0; i < names.length; i++) {
  console.log("Hello " + names[i]);
}

//Funzione

let names2 = ["Dami", "Lola", "Pinco", "Pallino"];

const salutaNomi = (lista) => {
  for (let i = 0; i < lista.length; i++) {
    console.log("Hello " + lista[i]);
  }
};

salutaNomi(names2);

//Oggetto Studente

let studente = {
  nome: "Mario",
  voto: 28,
};

alert(studente.nome + " ha preso " + studente.voto);

//Parola in maiuscolo

const inMaiuscolo = (word) => {
  return word.toUpperCase();
};

//Numeri quadrati
const stampaQuadrati = () => {
  const container = document.getElementById("quadrati-container");
  container.innerHTML = ""; // svuota eventuali risultati precedenti

  for (let i = 1; i <= 10; i++) {
    const div = document.createElement("div");
    div.textContent = i + "² = " + i * i;
    container.appendChild(div);
  }
};

//Ciclo for of meglio del ciclo For classico e vale solo per array e stringhe

let colori = ["red", "green", "blue", "yellow", "purple"];

for (let elem of colori) {
  console.log("Color: " + elem);
}

//Ciclo for in meglio del ciclo For classico e vale per oggetti

const automobile = {
  marca: "Toyota",
  modello: "Corolla",
  anno: 2020,
  isAvailable: true,
};

for (let key in automobile) {
  console.log(key + ": " + automobile[key]);
}

//Calcolatrice

const calcola = () => {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  const operation = document.getElementById("operation").value;
  let result;

  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 !== 0 ? num1 / num2 : "Error: Division by zero";
      break;

    default:
      result = "Error: Invalid operation";
  }
  document.getElementById("result").textContent = "Result: " + result;
};
