const b = document.getElementById("serach_button");
const input = document.getElementById("city_input");
const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");
const cityCountry = document.getElementById("city-country");

async function getData(cityName) {
  const promise = await fetch(
   ` http://api.weatherapi.com/v1/current.json?key=%20d1b3f2b54fe14e7d9ee133512242506&q=${cityName}&aqi=yes`
  );
  return await promise.json();
}
b.addEventListener("click", async () => {
  const value = input.value;
  const result = await getData(value);
  console.log(result);
  cityName.innerText = `${result.location.name},${result.location.region}`;

  cityCountry.innerText = `${result.location.country}`;

  cityTime.innerText = ` ${result.location.localtime}`;

  cityTemp.innerText = `${result.current.temp_c}`;
});

const heading = document.getElementById("headline");
function changeColor() {
  heading.style.color = "red";
  heading.style.backgroundColor = "white";
}
b.addEventListener("click", changeColor);