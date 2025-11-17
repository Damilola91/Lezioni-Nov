let users = [];

const calculateCategory = (job) => {
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
};

const createUser = (name, age, job = "not specified") => ({
  name,
  age,
  job,
  category: calculateCategory(job),
});

const sendMessageToUser = (user) => {
  return `Ciao ${user.name}, hai ${user.age} anni e lavori come ${user.job} nella categoria ${user.category}.`;
};

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

const userDebug = () => {
  console.table(users);

  for (const index in users) {
    console.log("User", index);
    for (const prop in users[index]) {
      console.log(` - ${prop}: ${users[index][prop]}`);
    }
  }
};

const addUser = () => {
  const name = document.getElementById("name").value.trim();
  const age = Number(document.getElementById("age").value);
  const job = document.getElementById("job").value.trim();

  // VALIDAZIONE
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

const showUserFiltered = (list) => {
  const box = document.getElementById("filtered");
  box.innerHTML = "";

  for (const user of list) {
    box.innerHTML += `
      <div class="user-card">
        <strong>${user.name}</strong><br>
        Età: ${user.age}<br>
        Categoria: ${user.category}
      </div>
    `;
  }
};

document.getElementById("filter").addEventListener("click", () => {
  const elder = users.filter((u) => u.age >= 18);
  showUserFiltered(elder);
});

document.getElementById("add").addEventListener("click", addUser);
