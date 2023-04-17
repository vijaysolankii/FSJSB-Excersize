function countDays(month, year) {
  let leapYear = new Date(year, 1, 29).getDate() === 29;
  if (leapYear) {
    return new Date(year, month, 0).getDate();
  } else {
    console.log("enter leap year month")
  }
}

console.log(countDays(2, 2020));
console.log(countDays(1, 2020));
