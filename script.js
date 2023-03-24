
// const DUMMY_DATA=[
//     {id:'d1',value:10,region:'USA'},
//     {id:'d2',value:11,region:'India'},
//     {id:'d3',value:12,region:'China'},
//     {id:'d4',value:6,region:'Germany'},
// ];
// console.log(d3);

// const xScale = d3.scaleBand().rangeRound([0, 250]).padding(0,1);
// const yScale = d3.scaleLinear().domain([0, 15]),;

// const container = d3.select('svg')
//   .classed('container', true);

// container
//   .selectAll('.bar')
//   .data(DUMMY_DATA)
//   .enter()
//   .append('rect')
//   .classed('bar', true) 
//   .attr('width', 50)
//   .attr('height', data => (data.value *15) );
  

// let devise = document.getElementById("devise")

 let from = document.getElementById("from");
 let to = document.getElementById("to");
 let amount = document.getElementById("amount");
 let result = document.getElementById("result");
 let button = document.getElementById("send");

 button.addEventListener("click", getRates) 

 async function getRates() {
     let fromCurrency = from.value;
     let toCurrency = to.value;
     let amountCurrency = amount.value;
  
     const key = "8e6de312f853558d57237b5ffe9f9618";
     const requestString= `https://api.currencybeacon.com/v1/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amountCurrency}&api_key=${key}`;
     const dataRates = await fetch(requestString);
     console.log(dataRates);

     let responseRates = await dataRates.json();
     console.log(responseRates);


     result.textContent = `${amountCurrency} ${fromCurrency} = ${responseRates.response.value} ${toCurrency}`;
    
} 
 getRates();



let city = document.getElementById("city");
let date = document.getElementById("date");
let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind");
let uv = document.getElementById("uv");
let temperature = document.getElementById("temperature");
let icon = document.getElementById("icon");
let submit = document.getElementById("submit");

submit.addEventListener("click", getWeather)


async function getWeather() {

    let cityWeather = city.value;

    const key = "f5cf8d804b794358b43131840232203";
    const requestString= `https://api.weatherapi.com/v1/current.json?key=f5cf8d804b794358b43131840232203&q=${cityWeather}&aqi=no`;
    const dataWeather = await fetch(requestString);
    console.log(dataWeather);

    let responseWeather = await dataWeather.json();
    console.log(responseWeather);

    useWeatherData(responseWeather);

    // date.textContent = `Date:${responseWeather.location.localtime}`;
    // humidity.textContent = `Humidity:${responseWeather.current.humidity}`;
    // wind.textContent = `Wind:${responseWeather.current.wind_kph}`;
    // uv.textContent = `UV:${responseWeather.current.uv}`;
    // temperature.textContent = `Temperature:${responseWeather.current.temp_c}°C`;
    // icon.src = responseWeather.current.condition.icon;
} 


function useWeatherData (responseWeather) {

    const weatherContainer = document.querySelector(".weatherBlock");

    const card = document.createElement("div");
    card.className = "card";
    card.style = "width: 18rem;";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    card.appendChild(cardBody);

    const city = document.createElement("h5");
    city.className = "city-name";
    city.textContent = responseWeather.location.name;
    cardBody.appendChild(city)

    const image = document.createElement("img");
    image.className = "icon";
    image.src = responseWeather.current.condition.icon;
    cardBody.appendChild(image);

    const date = document.createElement("p");
    date.className = "date";
    date.textContent = responseWeather.location.localtime;
    cardBody.appendChild(date);

    const humidity = document.createElement("p");
    humidity.className = "humidity";
    humidity.textContent = `Humidity: ${responseWeather.current.humidity}%`;
    cardBody.appendChild(humidity);

    const wind = document.createElement("p");
    wind.className = "wind";
    wind.textContent = `Wind: ${responseWeather.current.wind_kph} kph`;
    cardBody.appendChild(wind);

    const uv = document.createElement("p");
    uv.className = "uv";
    uv.textContent = `UV: ${responseWeather.current.uv}`;
    cardBody.appendChild(uv);
    
    const temperature = document.createElement("p");
    temperature.className = "temperature";
    temperature.textContent = `Temperature: ${responseWeather.current.temp_c} °`;
    cardBody.appendChild(temperature);
    
    weatherContainer.appendChild(card);
}

// useWeatherData(responseWeather);
    



// getWeather();

let places = document.getElementById("places");
let buttonPlaces = document.getElementById("btnplaces");

buttonPlaces.addEventListener("click", getPlaces)


async function getPlaces() {

    // let cityWeather = city.value;
    const placesSearch = places.value;
    const key = "5ae2e3f221c38a28845f05b6c8cb92f0bc450453b786ce4566a0e18f";
    // const requestString= "https://api.opentripmap.com/0.1/en/places/xid/R4682064?apikey=5ae2e3f221c38a28845f05b6c8cb92f0bc450453b786ce4566a0e18f";
    const requestString =`https://geocode.maps.co/search?q=${placesSearch}`;
    const dataPlaces = await fetch(requestString);
    console.log(dataPlaces);

    let responsePlaces = await dataPlaces.json();
    console.log(responsePlaces);


    const latitude = responsePlaces[0].lat;
    const longitude = responsePlaces[0].lon;

    console.log(latitude);
    console.log(longitude);

    // const requestUrl = `https://api.opentripmap.com/0.1/en/places/radius?radius=50&lon=${longitude}&lat=${latitude}&src_geom=wikidata&src_attr=wikidata&kinds=interesting_places&limit=50&apikey=5ae2e3f221c38a28845f05b6c8cb92f0bc450453b786ce4566a0e18f`
    // const requestUrl = `https://api.opentripmap.com/0.1/en/places/radius?radius=1000&lon=${longitude}&lat=${latitude}&kinds=interesting_places&limit=30&apikey=5ae2e3f221c38a28845f05b6c8cb92f0bc450453b786ce4566a0e18f`
    const requestMuseums = `https://api.opentripmap.com/0.1/en/places/radius?radius=5000&lon=${longitude}&lat=${latitude}&kinds=museums&rate=3&limit=20&apikey=5ae2e3f221c38a28845f05b6c8cb92f0bc450453b786ce4566a0e18f`
    const dataMuseums = await fetch(requestMuseums);
    console.log(dataMuseums);
    let responseMuseums = await dataMuseums.json();
    console.log(responseMuseums);

    const requestFood = `https://api.opentripmap.com/0.1/en/places/radius?radius=5000&lon=${longitude}&lat=${latitude}&kinds=foods&rate=3&limit=20&apikey=5ae2e3f221c38a28845f05b6c8cb92f0bc450453b786ce4566a0e18f`
    const dataFood = await fetch(requestFood);
    console.log(dataFood);
    let responseFood = await dataFood.json();
    console.log(responseFood);

    const requestArchitecture = `https://api.opentripmap.com/0.1/en/places/radius?radius=2000&lon=${longitude}&lat=${latitude}&kinds=architecture&rate=3&limit=20&apikey=5ae2e3f221c38a28845f05b6c8cb92f0bc450453b786ce4566a0e18f`
    const dataArchitecture = await fetch(requestArchitecture);
    console.log(dataArchitecture);
    let responseArchitecture = await dataArchitecture.json();
    console.log(responseArchitecture);

    const requestBeach = `https://api.opentripmap.com/0.1/en/places/radius?radius=100000&lon=${longitude}&lat=${latitude}&kinds=beaches&limit=20&apikey=5ae2e3f221c38a28845f05b6c8cb92f0bc450453b786ce4566a0e18f`
    const dataBeach = await fetch(requestBeach);
    console.log(dataBeach);
    let responseBeach = await dataBeach.json();
    console.log(responseBeach);

    const requestVP = `https://api.opentripmap.com/0.1/en/places/radius?radius=1000000&lon=${longitude}&lat=${latitude}&kinds=view_points&rate=3&limit=20&apikey=5ae2e3f221c38a28845f05b6c8cb92f0bc450453b786ce4566a0e18f`
    const dataVP = await fetch(requestVP);
    console.log(dataVP);
    let responseVP = await dataVP.json();
    console.log(responseVP);

    

    const requestHostels = `https://api.opentripmap.com/0.1/en/places/radius?radius=5000&lon=${longitude}&lat=${latitude}&kinds=hostels&limit=20&apikey=5ae2e3f221c38a28845f05b6c8cb92f0bc450453b786ce4566a0e18f`
    const dataHostels = await fetch(requestHostels);
    console.log(dataHostels);
    let responseHostels = await dataHostels.json();
    console.log(responseHostels);

}


getPlaces();
