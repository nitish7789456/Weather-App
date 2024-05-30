const btn = document.getElementById("search-btn");
const input = document.getElementById("city-input");
const ctName = document.getElementById("city-name");
const lcTime = document.getElementById("City-Time");
const ctTemp = document.getElementById("City-Temp");

async function data(cityName){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=39649ebf1a034e7b941132532240303&q=${cityName}&aqi=yes`);

    return await promise.json();
}

btn.addEventListener('click', async()=>{
    const value = input.value;
   const result = await data(value)
   ctName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`
   lcTime .innerText = result.location.localtime;
   ctTemp.innerText = result.current.temp_c;
})

