//task 1
// const num = +prompt("Введіть число");
// if (num >= 55 && num <= 99) {
//   console.log("Число потрапляє у діапазон");
// } else {
//   console.log("Число не потрапляє в діапазон");
// }

// //task 2
// const num = +prompt("Введіть свій вік");
// if (num >= 0 && num < 16) {
//   console.log("Ви дитина");
// } else if (num >= 17 && num < 60) {
//   console.log("Ви дорослий");
// } else if (num >= 61 && num < 100) {
//   console.log("Ви пенсіонер");
// }

// //task 3
// const myName = "Maxym";
// const mySurname = "Koval";
// const fullName = myName + mySurname;
// if (fullName.length <= 9) {
//   console.log("упс");
// } else if (fullName.length >= 11 && fullName.length >= 99) {
//   console.log("упс");
// } else if ((fullName.length = 10)) {
//   console.log(fullName.length);
// }

// //task 4
// const num = Math.round(Math.random() * (5 - 1)) + 1;
// if (num % 2 === 0) {
//   console.log("Це число парне");
// } else {
//   console.log("Це число не парне");
// }
// if (num === 1) {
// }
// console.log("це 1");

// if (num === 2) {
// }
// console.log("це 2");
// if (num === 3) {
// }
// console.log("це 3");
// if (num === 4) {
// }
console.log("це 4");
if (num === 5) {
}
console.log("це 5");

//task 5
const lang = prompt("Введіть мову");
switch (lang) {
  case "ua":
    console.log("Січень");
    break;
  case "fr":
    console.log("Janveir");
    break;
  case "en":
    console.log("Jenuary");
    break;
  case "ru":
    console.log("январь");
    break;
  default:
    alert("Непідтримувана мова");
    break;
}
