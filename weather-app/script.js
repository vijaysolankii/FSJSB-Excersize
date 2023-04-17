// Data => Done
// Variable to Store the Element => Done
// Function to get the data from weather app
// Manipluate the varibe of already created element

let data;

const inputBox = document.getElementById("inputBox");
const countryName = document.getElementById("countryName");
const stateName = document.getElementById("stateName");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const temprature = document.getElementById("temprature");
const logoImage = document.getElementById("logoImage");
const weatherStatus = document.getElementById("weatherStatus");

const getData = async (event) => {
  event.preventDefault();
  if (!inputBox.value) {
    alert("Please Enter The City Name: ");
    return;
  }

  //
  const city = inputBox.value;

  // Fetch Details

  const fetchData = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=22de20c1a87b442caea140026231202&q=${city}&days=14`
  );

  const orgData = await fetchData.json();
  data = orgData;
  console.log(data);
  console.log(data.forecast.forecastday.length);




  // Displaying the data in HTML
  countryName.innerHTML = data.location.country;
  stateName.innerHTML = data.location.region;
  cityName.innerHTML = data.location.name;
  humidity.innerHTML = data.current.humidity;
  windSpeed.innerHTML = data.current.wind_kph;
  temprature.innerHTML = data.current.temp_c;
  logoImage.src = "https"+data.current.condition.icon;
  weatherStatus.innerHTML = data.current.condition.text;
  // let all_values = document.querySelector(".current-forcast")
  
  // let dateArr = new Array()
  // // let currentDay = 
  // for (let i = 0;i < data.forecast.forecastday.length;i++){
  //   dateArr.push(data.forecast.forecastday[i].date)

  // } 
  // console.log(dateArr.join(" "))

  // let withoutComma = dateArr
  

  // let allDates = withoutComma.map(item => `<div class='date'>${item.toLocaleString({ month: 'short' })}</div>`).join(" ")
  // all_values.innerHTML = allDates
};



