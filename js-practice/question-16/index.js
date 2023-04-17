// 16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer

function checkSeason(monthName) {
  if (["September", "October", "November"].includes(monthName)) {
    console.log("current season is Autumn");
  } else if (["December", "January", "February"].includes(monthName)) {
    console.log("current season is Winter");
  } else if (["March", "April", "May"].includes(monthName)) {
    console.log("current season is Spring");
  } else if (["June", "July", "August"].includes(monthName)) {
    console.log("current season is Summer");
  } else{
    console.log('please enter valid monthname')
  }
}


console.log(checkSeason("October"))
console.log(checkSeason("February"))
console.log(checkSeason("March"))
console.log(checkSeason("July"))