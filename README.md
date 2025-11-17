# 🧑‍💻 User Generator – Project Documentation

Una mini-app creata con **HTML, CSS e JavaScript** che permette di:

- Inserire dati da input (nome, età, professione)
- Validarli usando _truthy/falsy_, `if` e operatori logici
- Classificare l’utente tramite `switch` in categorie: **Developer, Designer, Student, Other**
- Salvare gli utenti in un array di oggetti
- Mostrare la lista utenti nel DOM
- Filtrare solo i maggiorenni
- Usare arrow functions, default parameters e template literals
- Fare debug con `console.log`, `console.warn`, `console.error`, `console.table`

---

## 📁 Struttura del progetto

UserGenerator/
│
├── index.html # Interfaccia HTML dell’app
├── userGenerator.css # Stili semplici (opzionale)
└── userGenerator.js # Logica dell’app

yaml
Copia codice

---

## 🧱 Funzionalità principali

### 1️⃣ Input utente

L’interfaccia permette di inserire:

- **Nome**
- **Età**
- **Professione**

Tutti i valori vengono letti tramite `document.getElementById(...).value`.

---

### 2️⃣ Validazione dei dati

La funzione `addUser()` effettua controlli:

```js
if (!name) console.error("Missing name!");
if (Number.isNaN(age) || age <= 0)
  console.warn("Age must be a positive number!");
```

Il nome non può essere vuoto

L’età deve essere un numero positivo valido

Se i dati non sono corretti, l’aggiunta viene interrotta.

3️⃣ Categorizzazione utenti con switch
La funzione calculateCategory(job) classifica l’utente in base alla professione:

```js
switch (job.toLowerCase()) {
  case "developer":
    return "Developer";
  case "designer":
    return "Designer";
  case "student":
    return "Student";
  default:
    return "Other";
}
```

Tutto l’input viene convertito in minuscolo per uniformità

Professioni non riconosciute vengono classificate come Other

4️⃣ Creazione utente con arrow function

```js
const createUser = (name, age, job = "not specified") => ({
  name,
  age,
  job,
  category: calculateCategory(job),
});
```

Crea un oggetto utente con default parameter per il lavoro

Include automaticamente la categoria calcolata

5️⃣ Messaggi e debug

```js

const sendMessageToUser = (user) =>
  `Ciao ${user.name}, hai ${user.age} anni e lavori come ${user.job} nella categoria ${user.category}.`;

const userDebug = () => {
  console.table(users);
  for (const index in users) {
    console.log("User", index);
    for (const prop in users[index]) {
      console.log(` - ${prop}: ${users[index][prop]}`);
    }
  }
};
sendMessageToUser() restituisce un messaggio completo per la console

userDebug() stampa tutti gli utenti in tabella e proprietà dettagliate
```

6️⃣ Visualizzazione utenti nel DOM

```js
const showUsers = () => {
  const usersList = document.getElementById("user-list");
  usersList.innerHTML = "";
  for (const user of users) {
    usersList.innerHTML += `<div class="user-card">
        <strong>${user.name}</strong><br>
        Età: ${user.age}<br>
        Professione: ${user.job}<br>
        Categoria: ${user.category}
      </div>`;
  }
};
```

7️⃣ Aggiunta utente

```js
const addUser = () => {
  const name = document.getElementById("name").value.trim();
  const age = Number(document.getElementById("age").value);
  const job = document.getElementById("job").value.trim();

  if (!name) {
    console.error("Missing name!");
    return;
  }

  if (Number.isNaN(age) || age <= 0) {
    console.warn("Age must be a positive number!");
    return;
  }

  const newUser = createUser(name, age, job);
  users.push(newUser);

  console.log(sendMessageToUser(newUser));
  showUsers();
  userDebug();
};
```

8️⃣ Filtraggio maggiorenni

```js
const showUserFiltered = (list) => {
  const box = document.getElementById("filtered");
  box.innerHTML = "";
  for (const user of list) {
    box.innerHTML += `<div class="user-card">
        <strong>${user.name}</strong><br>
        Età: ${user.age}<br>
        Categoria: ${user.category}
      </div>`;
  }
};

document.getElementById("filter").addEventListener("click", () => {
  const elder = users.filter((u) => u.age >= 18);
  showUserFiltered(elder);
});

document.getElementById("add").addEventListener("click", addUser);
```

🚀 Come eseguire il progetto
Clona o scarica la cartella

Apri index.html nel browser

Inserisci nome, età e professione

Premi Add User per aggiungere l’utente

Premi Filter User per vedere solo gli utenti maggiorenni

📌 Note finali
Tutta la logica JavaScript è contenuta in userGenerator.js

I messaggi di debug sono visibili nella console del browser

È possibile estendere le categorie nella funzione calculateCategory
