// Use the Date object to do the following activities

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();
let currentDay = new Date().getDate();
let currentToday = new Date().getDay();
let currentHours = new Date().getHours();
let currentMinutes = new Date().getMinutes();
console.log("current year is : ", currentYear);
console.log("current month is : ", currentMonth);
console.log("current day is : ", currentDay);
console.log("current currentHours is : ", currentHours);
console.log("current currentMinutes is : ", currentMinutes);

console.log(new Date().getTime() / 1000);

console.log(
  currentYear +
    "-" +
    ("0" + currentMonth).slice(-2) +
    "-" +
    ("0" + currentDay).slice(-2) +
    " " +
    currentHours +
    ":" +
    currentMinutes
);
console.log(
  ("0" + currentDay).slice(-2) +
    "-" +
    ("0" + currentMonth).slice(-2) +
    "-" +
    currentYear +
    " " +
    currentHours +
    ":" +
    currentMinutes
);
console.log(
  ("0" + currentDay).slice(-2) +
    "/" +
    ("0" + currentMonth).slice(-2) +
    "/" +
    currentYear +
    " " +
    currentHours +
    ":" +
    currentMinutes
);
