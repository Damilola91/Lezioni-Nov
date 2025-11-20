//Esercizio 1.1

const playlist = ["Blue Bossa", "Jazz in Paris", "The Messenger"];

const newPlaylist = [
  ...playlist.slice(1),
  ...["Autumn Leaves", "So What"],
  playlist[0],
];

const central = newPlaylist.slice(1, -1);

console.log("Original Playlist:", playlist);
console.log("New Playlist:", newPlaylist);
console.log("Central Songs:", central);

//Esercizio 1.2

const queue = ["A", "B", "C", "D"];
queue.unshift("X", "Y");
const leaving = queue.pop();
const removed = queue.splice(1, 1)[0];

console.log("Final Queue:", queue);
console.log("Leaving Person:", leaving);
console.log("Removed Person:", removed);

//Esercizio 1.3

const numbers = [5, 3, 9, 1, 4];
numbers.shift();
numbers.pop();
numbers.push(7);

const subsequence = numbers.slice(0, 2);

console.log("Modified Numbers:", numbers);
console.log("Subsequence:", subsequence);

//Esercizio 1.4

const gifts = ["teddy bear", "drone", "doll"];
gifts.unshift("puzzle", "bike");

const removedGift = gifts.splice(1, 1)[0];

const getLastTwoGifts = gifts.slice(-2);

console.log("Final Gifts:", gifts);
console.log("Removed Gift:", removedGift);
console.log("Last Two Gifts:", getLastTwoGifts);

//Esercizio 1.5

const messages = ["Hello", "How are you?", "Goodbye", "See you later"];

messages.push("Have a nice day!");
messages.unshift("Welcome!");

const removedMessage = messages.pop();

const centralMessages = messages.slice(1, -1);

console.log("Final Messages:", messages);
console.log("Removed Message:", removedMessage);
console.log("Central Messages:", centralMessages);

//Esercizio 1.6

const stock = [10, 20, 30, 40, 50];
stock.push(60, 70);

const firstItem = stock.shift();
const lastItem = stock.pop();
stock.unshift(lastItem);

const middleItems = stock.slice(1, -1);

console.log("Final Stock:", stock);
console.log("Middle Items:", middleItems);

//Esercizio 2.1

const expenses = 104;

const result = expenses >= 100 ? "Discount" : "None";

console.log("Expense Result:", result);

//Esercizio 2.2

const concatSep = (sep, ...pieces) => pieces.join(sep);
const result1 = concatSep(" - ", "Hello", "how", "are", "you?");
const words = ["Good", "morning", "everyone"];
const result2 = concatSep(" | ", ...words);

console.log("Result 1:", result1);
console.log("Result 2:", result2);

//Esercizio 2.3

const tags1 = ["javascript", "web", "frontend"];
const tags2 = ["nodejs", "backend", "database"];
const allTags = [...tags1, ...tags2];

console.log("All Tags:", allTags);

//Esercizio 2.4
const ageLimits = 18;
const checkAge = (age) => (age >= ageLimits ? "Adult" : "Minor");

console.log("Check Age 20:", checkAge(20));
console.log("Check Age 16:", checkAge(16));

//Esercizio 2.5

const sumVariables = (...nums) => nums.reduce((acc, curr) => acc + curr, 0);
console.log(sumVariables(2, 5, 10));

const numbersArray = [20, 31, 2, 168, 5];
console.log(sumVariables(...numbersArray));

//Esercizio 2.5.1

const sumVariablesV2 = (...nums) =>
  nums.length === 0 ? 0 : nums[0] + sumVariablesV2(...nums.slice(1));
console.log(sumVariablesV2(2, 5, 10));
console.log(sumVariablesV2(...numbersArray));

//Esercizio 2.6

const product1 = ["Bread", "Milk"];
const product2 = ["Eggs", "Butter"];

const finalsProducts = product1.concat(product2);
console.log("Final Products:", finalsProducts);

//Esercizio 3.1

const info = ["Luca", 28, "CTO", "Milan", "Italy"];

const [name, , role] = info;

console.log("Name:", name);
console.log("Role:", role);

//Esercizio 3.2

const user = { username: "cli_user", role2: "editor" };

const { username: nick, role2, active = false } = user;

console.log("Nick:", nick);
console.log("Role:", role2);
console.log("Active:", active);

//Esercizio 3.3

const getFirstAndCount = ([first, ...rest]) => {
  return {
    first,
    restCount: rest.length,
  };
};

console.log(getFirstAndCount([10, 20, 30, 40, 50]));

console.log(getFirstAndCount(["apple", "banana", "cherry"]));

//Esercizio 3.4

const dataMario = ["Mario", "Rossi", 35, "Rome", "Engineer"];

const [name2, , , city] = dataMario;
console.log("Name:", name2);
console.log("City:", city);

//Esercizio 3.5

const config = { theme: "dark" };

const { theme, lang: lingua = "de" } = config;
console.log("Theme:", theme);
console.log("Language:", lingua);

//Esercizio 3.6

const userResume = ({ name3, surname, ...other }) => {
  return {
    completeName: `${name3} ${surname}`,
    details: other,
  };
};

const userInfo = {
  name3: "Anna",
  surname: "Bianchi",
  age: 29,
  city: "Florence",
  profession: "Designer",
};
console.log(userResume(userInfo));

//Extras

//1

const firstArray = [1, 2, 3, 4, 5];

const clonedArray = [...firstArray];
clonedArray.push(6);
clonedArray[0] = 6;

console.log("First Array:", firstArray);
console.log("Cloned Array:", clonedArray);

//2

const students = [
  { name: "Luca", score: 85 },
  { name: "Maria", score: 92 },
  { name: "Giovanni", score: 78 },
];

const introduceStudents = ({ name, score }) =>
  `Student ${name} has scored ${score} points.`;

students.forEach((student) => {
  console.log(introduceStudents(student));
});

//3

const secondOfFirst = (firsArray, ...rest) => {
  const [, second] = firsArray || [];
  return second;
};

console.log(secondOfFirst([10, 20, 30], [1, 2, 3]));
console.log(secondOfFirst(["a", "b", "c"], ["x", "y"]));
console.log(secondOfFirst([], [1, 2]));

//4

const getSecondAndThird = ([, second, third]) => [second, third];

const arr = [11, 12, 13];
const result3 = getSecondAndThird(arr);

//5

const evenOrOdd = (num) => (num % 2 === 0 ? "Even" : "Odd");

console.log(evenOrOdd(4));
console.log(evenOrOdd(7));

//6

const filterLength = (...strings) => strings.filter((s) => s.length > 3);

const filtered = filterLength("hi", "hello", "hey", "greetings", "yo");
console.log("Filtered Strings:", filtered);

//7

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const combinedArray = [...arr1, ...arr2, ...arr3];
console.log("Combined Array:", combinedArray);

//8

const describeProduct = ({ nome, prezzo = 0 }) =>
  `Nome: ${nome}, Prezzo: ${prezzo}`;

const prodotto1 = { nome: "Pane", prezzo: 2.5 };
const prodotto2 = { nome: "Latte" };

console.log(describeProduct(prodotto1));
console.log(describeProduct(prodotto2));
