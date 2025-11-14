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
