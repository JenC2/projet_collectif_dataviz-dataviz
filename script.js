
//  let from = document.getElementById("from");
//  let to = document.getElementById("to");
//  let amount = document.getElementById("amount");
//  let result = document.getElementById("result");
//  let button = document.getElementById("send");

//  button.addEventListener("click", getRates) 

//  async function getRates() {
//      let fromCurrency = from.value;
//      let toCurrency = to.value;
//      let amountCurrency = amount.value;
  
//      const key = "8e6de312f853558d57237b5ffe9f9618";
//      const requestString= `https://api.currencybeacon.com/v1/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amountCurrency}&api_key=${key}`;
//      const dataRates = await fetch(requestString);
//      console.log(dataRates);

//      let responseRates = await dataRates.json();
//      console.log(responseRates);


//      result.textContent = `${amountCurrency} ${fromCurrency} = ${responseRates.response.value} ${toCurrency}`;
    
// } 
//  getRates();


let city = document.getElementById("city");
let search = document.getElementById("search");

// ---------- weather function -------------

// let date = document.getElementById("date");
// let humidity = document.getElementById("humidity");
// let wind = document.getElementById("wind");
// let uv = document.getElementById("uv");
// let temperature = document.getElementById("temperature");
// let icon = document.getElementById("icon");
// search.addEventListener("click", getWeather);

// Museums




// async function getWeather() {

//     let cityWeather = city.value;

//     const key = "f5cf8d804b794358b43131840232203";
//     const requestString= `https://api.weatherapi.com/v1/current.json?key=f5cf8d804b794358b43131840232203&q=${cityWeather}&aqi=no`;
//     const dataWeather = await fetch(requestString);
//     console.log(dataWeather);

//     let responseWeather = await dataWeather.json();
//     console.log(responseWeather);

//     useWeatherData(responseWeather);

    // date.textContent = `Date:${responseWeather.location.localtime}`;
    // humidity.textContent = `Humidity:${responseWeather.current.humidity}`;
    // wind.textContent = `Wind:${responseWeather.current.wind_kph}`;
    // uv.textContent = `UV:${responseWeather.current.uv}`;
    // temperature.textContent = `Temperature:${responseWeather.current.temp_c}°C`;
    // icon.src = responseWeather.current.condition.icon;
// } 


// function useWeatherData (responseWeather) {

//     const weatherContainer = document.querySelector(".weatherBlock");

//     const card = document.createElement("div");
//     card.className = "card";
//     card.style = "width: 18rem;";

//     const cardBody = document.createElement("div");
//     cardBody.className = "card-body";
//     card.appendChild(cardBody);

//     const city = document.createElement("h5");
//     city.className = "city-name";
//     city.textContent = responseWeather.location.name;
//     cardBody.appendChild(city)

//     const image = document.createElement("img");
//     image.className = "icon";
//     image.src = responseWeather.current.condition.icon;
//     cardBody.appendChild(image);

//     const date = document.createElement("p");
//     date.className = "date";
//     date.textContent = responseWeather.location.localtime;
//     cardBody.appendChild(date);

//     const humidity = document.createElement("p");
//     humidity.className = "humidity";
//     humidity.textContent = `Humidity: ${responseWeather.current.humidity}%`;
//     cardBody.appendChild(humidity);

//     const wind = document.createElement("p");
//     wind.className = "wind";
//     wind.textContent = `Wind: ${responseWeather.current.wind_kph} kph`;
//     cardBody.appendChild(wind);

//     const uv = document.createElement("p");
//     uv.className = "uv";
//     uv.textContent = `UV: ${responseWeather.current.uv}`;
//     cardBody.appendChild(uv);
    
//     const temperature = document.createElement("p");
//     temperature.className = "temperature";
//     temperature.textContent = `Temperature: ${responseWeather.current.temp_c} °`;
//     cardBody.appendChild(temperature);
    
//     weatherContainer.appendChild(card);
// }

// useWeatherData(responseWeather);
    


//

// getWeather();

// let places = document.getElementById("places");
// let buttonPlaces = document.getElementById("btnplaces");

// buttonPlaces.addEventListener("click", getPlaces)


// async function getPlaces() {

//     // let cityWeather = city.value;
//     const placesSearch = places.value;
//     const key = "5ae2e3f221c38a28845f05b6c8cb92f0bc450453b786ce4566a0e18f";
//     // const requestString= "https://api.opentripmap.com/0.1/en/places/xid/R4682064?apikey=5ae2e3f221c38a28845f05b6c8cb92f0bc450453b786ce4566a0e18f";
//     const requestString =`https://geocode.maps.co/search?q=${placesSearch}`;
//     const dataPlaces = await fetch(requestString);
//     console.log(dataPlaces);

//     let responsePlaces = await dataPlaces.json();
//     console.log(responsePlaces);


//     const latitude = responsePlaces[0].lat;
//     const longitude = responsePlaces[0].lon;

//     console.log(latitude);
//     console.log(longitude);

//     // const requestUrl = `https://api.opentripmap.com/0.1/en/places/radius?radius=50&lon=${longitude}&lat=${latitude}&src_geom=wikidata&src_attr=wikidata&kinds=interesting_places&limit=50&apikey=5ae2e3f221c38a28845f05b6c8cb92f0bc450453b786ce4566a0e18f`
//     // const requestUrl = `https://api.opentripmap.com/0.1/en/places/radius?radius=1000&lon=${longitude}&lat=${latitude}&kinds=interesting_places&limit=30&apikey=5ae2e3f221c38a28845f05b6c8cb92f0bc450453b786ce4566a0e18f`
//     const requestMuseums = `https://api.opentripmap.com/0.1/en/places/radius?radius=5000&lon=${longitude}&lat=${latitude}&kinds=museums&rate=3&limit=20&apikey=5ae2e3f221c38a28845f05b6c8cb92f0bc450453b786ce4566a0e18f`
//     const dataMuseums = await fetch(requestMuseums);
//     console.log(dataMuseums);
//     let responseMuseums = await dataMuseums.json();
//     console.log(responseMuseums);

//     const requestFood = `https://api.opentripmap.com/0.1/en/places/radius?radius=5000&lon=${longitude}&lat=${latitude}&kinds=foods&rate=3&limit=20&apikey=5ae2e3f221c38a28845f05b6c8cb92f0bc450453b786ce4566a0e18f`
//     const dataFood = await fetch(requestFood);
//     console.log(dataFood);
//     let responseFood = await dataFood.json();
//     console.log(responseFood);

//     const requestArchitecture = `https://api.opentripmap.com/0.1/en/places/radius?radius=2000&lon=${longitude}&lat=${latitude}&kinds=architecture&rate=3&limit=20&apikey=5ae2e3f221c38a28845f05b6c8cb92f0bc450453b786ce4566a0e18f`
//     const dataArchitecture = await fetch(requestArchitecture);
//     console.log(dataArchitecture);
//     let responseArchitecture = await dataArchitecture.json();
//     console.log(responseArchitecture);

//     const requestBeach = `https://api.opentripmap.com/0.1/en/places/radius?radius=100000&lon=${longitude}&lat=${latitude}&kinds=beaches&limit=20&apikey=5ae2e3f221c38a28845f05b6c8cb92f0bc450453b786ce4566a0e18f`
//     const dataBeach = await fetch(requestBeach);
//     console.log(dataBeach);
//     let responseBeach = await dataBeach.json();
//     console.log(responseBeach);

//     const requestVP = `https://api.opentripmap.com/0.1/en/places/radius?radius=1000000&lon=${longitude}&lat=${latitude}&kinds=view_points&rate=3&limit=20&apikey=5ae2e3f221c38a28845f05b6c8cb92f0bc450453b786ce4566a0e18f`
//     const dataVP = await fetch(requestVP);
//     console.log(dataVP);
//     let responseVP = await dataVP.json();
//     console.log(responseVP);

//     const requestHostels = `https://api.opentripmap.com/0.1/en/places/radius?radius=5000&lon=${longitude}&lat=${latitude}&kinds=hostels&limit=20&apikey=5ae2e3f221c38a28845f05b6c8cb92f0bc450453b786ce4566a0e18f`
//     const dataHostels = await fetch(requestHostels);
//     console.log(dataHostels);
//     let responseHostels = await dataHostels.json();
//     console.log(responseHostels);

// }


// getPlaces();

const museum = document.getElementById("museum");
museum.addEventListener("click", getMuseum);


async function getMuseum() {

    let cityMuseum = city.value;
  
    const requestString =`https://geocode.maps.co/search?q=${cityMuseum}`;
    const dataPlaces = await fetch(requestString);
    console.log(dataPlaces);

    let responsePlaces = await dataPlaces.json();
    console.log(responsePlaces);

    const latitude = responsePlaces[0].lat;
    const longitude = responsePlaces[0].lon;

    console.log(latitude);
    console.log(longitude);

    const requestMuseums = `https://api.opentripmap.com/0.1/en/places/radius?radius=5000&lon=${longitude}&lat=${latitude}&kinds=museums&rate=3&limit=9&apikey=5ae2e3f221c38a28845f05b6c8cb92f0bc450453b786ce4566a0e18f`
    const dataMuseums = await fetch(requestMuseums);
    console.log(dataMuseums);
    let responseMuseums = await dataMuseums.json();

    
    console.log(responseMuseums);

    const museumContainer = document.querySelector(".museum");
    museumContainer.innerHTML = '';

     for( let i = 0; responseMuseums.features.length; i++ ) {
        
    const xid = responseMuseums.features[i].properties.xid;
    console.log(xid);

    

    const requestMuseumsAll = `https://api.opentripmap.com/0.1/en/places/xid/${xid}?apikey=5ae2e3f221c38a28845f05b6c8cb92f0bc450453b786ce4566a0e18f`
    const dataMuseumsAll = await fetch(requestMuseumsAll);
    console.log(dataMuseumsAll);
    let responseMuseumsAll = await dataMuseumsAll.json();
    console.log(responseMuseumsAll);

    const card = document.createElement("div");
    card.className = "card";
    card.style = "width:18rem;"

    const image = document.createElement("img");
    image.className = "card-img-top";
    image.src = responseMuseumsAll.preview.source;
    card.appendChild(image);
    console.log(image);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    card.appendChild(cardBody);

    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = responseMuseumsAll.name;
    cardBody.appendChild(cardTitle);
    
    const cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.textContent = responseMuseumsAll.address.city;
    cardBody.appendChild(cardText);

    const list = document.createElement("ul");
    list.className = "list-group list-group-flush";
    card.appendChild(list);

    const listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.textContent = responseMuseumsAll.address.postcode;
    list.appendChild(listItem);

    const listItemTwo = document.createElement("li");
    listItemTwo.className = "list-group-item";
    listItemTwo.textContent = responseMuseumsAll.address.road;
    list.appendChild(listItemTwo);
    
    const cardLink = document.createElement("div");
    cardLink.className = "card-body";
    card.appendChild(cardLink);

    const linkWiki = document.createElement("a")
    linkWiki.className = "card-link";
    linkWiki.textContent = "Wikipedia";
    linkWiki.href = responseMuseumsAll.wikipedia;
    linkWiki.setAttribute("target", "_blank")
    cardLink.appendChild(linkWiki);

    const linkOtm = document.createElement("a")
    linkOtm.className = "card-link";
    linkOtm.textContent = "Open Trips Map";
    linkOtm.href = responseMuseumsAll.otm;
    linkOtm.setAttribute("target", "_blank");
    cardLink.appendChild(linkOtm);

    museumContainer.appendChild(card);
        

     }
    
    
}

getMuseum();


const food = document.getElementById("food");
food.addEventListener("click", getFood);


async function getFood() {

    let cityFood = city.value;
  
    const requestString =`https://geocode.maps.co/search?q=${cityFood}`;
    const dataPlaces = await fetch(requestString);
    console.log(dataPlaces);

    let responsePlaces = await dataPlaces.json();
    console.log(responsePlaces);

    const latitude = responsePlaces[0].lat;
    const longitude = responsePlaces[0].lon;

    console.log(latitude);
    console.log(longitude);

    const requestFood = `https://api.opentripmap.com/0.1/en/places/radius?radius=5000&lon=${longitude}&lat=${latitude}&kinds=foods&rate=3&limit=9&apikey=5ae2e3f221c38a28845f05b6c8cb92f0bc450453b786ce4566a0e18f`
    const dataFood = await fetch(requestFood);
    console.log(dataFood);
    let responseFood = await dataFood.json();

    
    console.log(responseFood);

    const foodContainer = document.querySelector(".food");
    foodContainer.innerHTML = '';

     for( let i = 0; responseFood.features.length; i++ ) {
        
    const xid = responseFood.features[i].properties.xid;
    console.log(xid);

    

    const requestFoodAll = `https://api.opentripmap.com/0.1/en/places/xid/${xid}?apikey=5ae2e3f221c38a28845f05b6c8cb92f0bc450453b786ce4566a0e18f`
    const dataFoodAll = await fetch(requestFoodAll);
    console.log(dataFoodAll);
    let responseFoodAll = await dataFoodAll.json();
    console.log(responseFoodAll);

    const card = document.createElement("div");
    card.className = "card";
    card.style = "width:18rem;"

    const image = document.createElement("img");
    image.className = "card-img-top";
    image.src = responseFoodAll.preview.source;
    card.appendChild(image);
    console.log(image);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    card.appendChild(cardBody);

    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = responseFoodAll.name;
    cardBody.appendChild(cardTitle);
    
    const cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.textContent = responseFoodAll.address.city;
    cardBody.appendChild(cardText);

    const list = document.createElement("ul");
    list.className = "list-group list-group-flush";
    card.appendChild(list);

    const listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.textContent = responseFoodAll.address.postcode;
    list.appendChild(listItem);

    const listItemTwo = document.createElement("li");
    listItemTwo.className = "list-group-item";
    listItemTwo.textContent = responseFoodAll.address.road;
    list.appendChild(listItemTwo);
    
    const cardLink = document.createElement("div");
    cardLink.className = "card-body";
    card.appendChild(cardLink);

    const linkWiki = document.createElement("a")
    linkWiki.className = "card-link";
    linkWiki.textContent = "Wikipedia";
    linkWiki.href = responseFoodAll.wikipedia;
    linkWiki.setAttribute("target", "_blank")
    cardLink.appendChild(linkWiki);

    const linkOtm = document.createElement("a")
    linkOtm.className = "card-link";
    linkOtm.textContent = "Open Trips Map";
    linkOtm.href = responseFoodAll.otm;
    linkOtm.setAttribute("target", "_blank");
    cardLink.appendChild(linkOtm);

    foodContainer.appendChild(card);
     }
    
    
}

getFood();



const arc = document.getElementById("arc");
arc.addEventListener("click", getArc);


async function getArc() {

    let cityArc = city.value;
  
    const requestString =`https://geocode.maps.co/search?q=${cityArc}`;
    const dataPlaces = await fetch(requestString);
    console.log(dataPlaces);

    let responsePlaces = await dataPlaces.json();
    console.log(responsePlaces);

    const latitude = responsePlaces[0].lat;
    const longitude = responsePlaces[0].lon;

    console.log(latitude);
    console.log(longitude);

    const requestArc = `https://api.opentripmap.com/0.1/en/places/radius?radius=5000&lon=${longitude}&lat=${latitude}&kinds=architecture&rate=3&limit=9&apikey=5ae2e3f221c38a28845f05b6c8cb92f0bc450453b786ce4566a0e18f`
    const dataArc = await fetch(requestArc);
    console.log(dataArc);
    let responseArc = await dataArc.json();

    
    console.log(responseArc);

    const arcContainer = document.querySelector(".arc");
    arcContainer.innerHTML = '';

     for( let i = 0; responseArc.features.length; i++ ) {
        
    const xid = responseArc.features[i].properties.xid;
    console.log(xid);

    

    const requestArcAll = `https://api.opentripmap.com/0.1/en/places/xid/${xid}?apikey=5ae2e3f221c38a28845f05b6c8cb92f0bc450453b786ce4566a0e18f`
    const dataArcAll = await fetch(requestArcAll);
    console.log(dataArcAll);
    let responseArcAll = await dataArcAll.json();
    console.log(responseArcAll);

    const card = document.createElement("div");
    card.className = "card";
    card.style = "width:18rem;"

    const image = document.createElement("img");
    image.className = "card-img-top";
    image.src = responseArcAll.preview.source;
    card.appendChild(image);
    console.log(image);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    card.appendChild(cardBody);

    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = responseArcAll.name;
    cardBody.appendChild(cardTitle);
    
    const cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.textContent = responseArcAll.address.city;
    cardBody.appendChild(cardText);

    const list = document.createElement("ul");
    list.className = "list-group list-group-flush";
    card.appendChild(list);

    const listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.textContent = responseArcAll.address.postcode;
    list.appendChild(listItem);

    const listItemTwo = document.createElement("li");
    listItemTwo.className = "list-group-item";
    listItemTwo.textContent = responseArcAll.address.road;
    list.appendChild(listItemTwo);
    
    const cardLink = document.createElement("div");
    cardLink.className = "card-body";
    card.appendChild(cardLink);

    const linkWiki = document.createElement("a")
    linkWiki.className = "card-link";
    linkWiki.textContent = "Wikipedia";
    linkWiki.href = responseArcAll.wikipedia;
    linkWiki.setAttribute("target", "_blank")
    cardLink.appendChild(linkWiki);

    const linkOtm = document.createElement("a")
    linkOtm.className = "card-link";
    linkOtm.textContent = "Open Trips Map";
    linkOtm.href = responseArcAll.otm;
    linkOtm.setAttribute("target", "_blank");
    cardLink.appendChild(linkOtm);

    arcContainer.appendChild(card);
     }
    
    
}

getArc();






const beach = document.getElementById("beach");
beach.addEventListener("click", getBeach);


async function getBeach() {

    let cityBeach = city.value;
  
    const requestString =`https://geocode.maps.co/search?q=${cityBeach}`;
    const dataPlaces = await fetch(requestString);
    console.log(dataPlaces);

    let responsePlaces = await dataPlaces.json();
    console.log(responsePlaces);

    const latitude = responsePlaces[0].lat;
    const longitude = responsePlaces[0].lon;

    console.log(latitude);
    console.log(longitude);

    const requestBeach = `https://api.opentripmap.com/0.1/en/places/radius?radius=100000&lon=${longitude}&lat=${latitude}&kinds=beaches&limit=9&apikey=5ae2e3f221c38a28845f05b6c8cb92f0bc450453b786ce4566a0e18f`
    const dataBeach = await fetch(requestBeach);
    console.log(dataBeach);
    let responseBeach = await dataBeach.json();

    
    console.log(responseBeach);

    const beachContainer = document.querySelector(".beach");
    beachContainer.innerHTML = '';

     for( let i = 0; responseBeach.features.length; i++ ) {
        
    const xid = responseBeach.features[i].properties.xid;
    console.log(xid);

    

    const requestBeachAll = `https://api.opentripmap.com/0.1/en/places/xid/${xid}?apikey=5ae2e3f221c38a28845f05b6c8cb92f0bc450453b786ce4566a0e18f`
    const dataBeachAll = await fetch(requestBeachAll);
    console.log(dataBeachAll);
    let responseBeachAll = await dataBeachAll.json();
    console.log(responseBeachAll);

    const card = document.createElement("div");
    card.className = "card";
    card.style = "width:18rem;"

    // const image = document.createElement("img");
    // image.className = "card-img-top";
    // image.src = responseBeachAll.preview.source;
    // card.appendChild(image);
    // console.log(image);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    card.appendChild(cardBody);

    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = responseBeachAll.name;
    cardBody.appendChild(cardTitle);
    
    const cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.textContent = responseBeachAll.address.city;
    cardBody.appendChild(cardText);

    const list = document.createElement("ul");
    list.className = "list-group list-group-flush";
    card.appendChild(list);

    const listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.textContent = responseBeachAll.address.postcode;
    list.appendChild(listItem);

    const listItemTwo = document.createElement("li");
    listItemTwo.className = "list-group-item";
    listItemTwo.textContent = responseBeachAll.address.road;
    list.appendChild(listItemTwo);
    
    const cardLink = document.createElement("div");
    cardLink.className = "card-body";
    card.appendChild(cardLink);

    const linkWiki = document.createElement("a")
    linkWiki.className = "card-link";
    linkWiki.textContent = "Wikipedia";
    linkWiki.href = responseBeachAll.wikipedia;
    linkWiki.setAttribute("target", "_blank")
    cardLink.appendChild(linkWiki);

    const linkOtm = document.createElement("a")
    linkOtm.className = "card-link";
    linkOtm.textContent = "Open Trips Map";
    linkOtm.href = responseBeachAll.otm;
    linkOtm.setAttribute("target", "_blank");
    cardLink.appendChild(linkOtm);

    beachContainer.appendChild(card);
     }
    
    
}

getBeach();


const vp = document.getElementById("vp");
vp.addEventListener("click", getVp);


async function getVp() {

    let cityVp = city.value;
  
    const requestString =`https://geocode.maps.co/search?q=${cityVp}`;
    const dataPlaces = await fetch(requestString);
    console.log(dataPlaces);

    let responsePlaces = await dataPlaces.json();
    console.log(responsePlaces);

    const latitude = responsePlaces[0].lat;
    const longitude = responsePlaces[0].lon;

    console.log(latitude);
    console.log(longitude);

    const requestVp = `https://api.opentripmap.com/0.1/en/places/radius?radius=1000000&lon=${longitude}&lat=${latitude}&kinds=view_points&rate=3&limit=9&apikey=5ae2e3f221c38a28845f05b6c8cb92f0bc450453b786ce4566a0e18f`
    const dataVp = await fetch(requestVp);
    console.log(dataVp);
    let responseVp = await dataVp.json();

    
    console.log(responseVp);

    const vpContainer = document.querySelector(".vp");
    vpContainer.innerHTML = '';

     for( let i = 0; responseVp.features.length; i++ ) {
        
    const xid = responseVp.features[i].properties.xid;
    console.log(xid);

    

    const requestVpAll = `https://api.opentripmap.com/0.1/en/places/xid/${xid}?apikey=5ae2e3f221c38a28845f05b6c8cb92f0bc450453b786ce4566a0e18f`
    const dataVpAll = await fetch(requestVpAll);
    console.log(dataVpAll);
    let responseVpAll = await dataVpAll.json();
    console.log(responseVpAll);

    const card = document.createElement("div");
    card.className = "card";
    card.style = "width:18rem;"

    const image = document.createElement("img");
    image.className = "card-img-top";
    image.src = responseVpAll.preview.source;
    card.appendChild(image);
    console.log(image);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    card.appendChild(cardBody);

    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = responseVpAll.name;
    cardBody.appendChild(cardTitle);
    
    const cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.textContent = responseVpAll.address.city;
    cardBody.appendChild(cardText);

    const list = document.createElement("ul");
    list.className = "list-group list-group-flush";
    card.appendChild(list);

    const listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.textContent = responseVpAll.address.postcode;
    list.appendChild(listItem);

    const listItemTwo = document.createElement("li");
    listItemTwo.className = "list-group-item";
    listItemTwo.textContent = responseVpAll.address.road;
    list.appendChild(listItemTwo);
    
    const cardLink = document.createElement("div");
    cardLink.className = "card-body";
    card.appendChild(cardLink);

    const linkWiki = document.createElement("a")
    linkWiki.className = "card-link";
    linkWiki.textContent = "Wikipedia";
    linkWiki.href = responseVpAll.wikipedia;
    linkWiki.setAttribute("target", "_blank")
    cardLink.appendChild(linkWiki);

    const linkOtm = document.createElement("a")
    linkOtm.className = "card-link";
    linkOtm.textContent = "Open Trips Map";
    linkOtm.href = responseVpAll.otm;
    linkOtm.setAttribute("target", "_blank");
    cardLink.appendChild(linkOtm);

    vpContainer.appendChild(card);
     }
    
    
}

getVp();




const hostel = document.getElementById("hostel");
hostel.addEventListener("click", getHostel);

async function getHostel() {

    let cityHostel = city.value;
  
    const requestString =`https://geocode.maps.co/search?q=${cityHostel}`;
    const dataPlaces = await fetch(requestString);
    console.log(dataPlaces);

    let responsePlaces = await dataPlaces.json();
    console.log(responsePlaces);

    const latitude = responsePlaces[0].lat;
    const longitude = responsePlaces[0].lon;

    console.log(latitude);
    console.log(longitude);

    const requestHostel = `https://api.opentripmap.com/0.1/en/places/radius?radius=50000&lon=${longitude}&lat=${latitude}&kinds=hostels&limit=9&apikey=5ae2e3f221c38a28845f05b6c8cb92f0bc450453b786ce4566a0e18f`
    const dataHostel = await fetch(requestHostel);
    console.log(dataHostel);
    let responseHostel = await dataHostel.json();

    
    console.log(responseHostel);

    const hostelContainer = document.querySelector(".hostel");
    hostelContainer.innerHTML = '';

     for( let i = 0; responseHostel.features.length; i++ ) {
        
    const xid = responseHostel.features[i].properties.xid;
    console.log(xid);

    

    const requestHostelAll = `https://api.opentripmap.com/0.1/en/places/xid/${xid}?apikey=5ae2e3f221c38a28845f05b6c8cb92f0bc450453b786ce4566a0e18f`
    const dataHostelAll = await fetch(requestHostelAll);
    console.log(dataHostelAll);
    let responseHostelAll = await dataHostelAll.json();
    console.log(responseHostelAll);

    const card = document.createElement("div");
    card.className = "card";
    card.style = "width:18rem;"

    // const image = document.createElement("img");
    // image.className = "card-img-top";
    // image.src = responseHostelAll.preview.source;
    // card.appendChild(image);
    // console.log(image);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    card.appendChild(cardBody);

    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = responseHostelAll.name;
    cardBody.appendChild(cardTitle);
    
    const cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.textContent = responseHostelAll.address.city;
    cardBody.appendChild(cardText);

    const list = document.createElement("ul");
    list.className = "list-group list-group-flush";
    card.appendChild(list);

    const listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.textContent = responseHostelAll.address.postcode;
    list.appendChild(listItem);

    const listItemTwo = document.createElement("li");
    listItemTwo.className = "list-group-item";
    listItemTwo.textContent = responseHostelAll.address.road;
    list.appendChild(listItemTwo);
    
    const cardLink = document.createElement("div");
    cardLink.className = "card-body";
    card.appendChild(cardLink);

    const linkWiki = document.createElement("a")
    linkWiki.className = "card-link";
    linkWiki.textContent = "Booking";
    linkWiki.href = responseHostelAll.url;
    linkWiki.setAttribute("target", "_blank")
    cardLink.appendChild(linkWiki);

    const linkOtm = document.createElement("a")
    linkOtm.className = "card-link";
    linkOtm.textContent = "Open Trips Map";
    linkOtm.href = responseHostelAll.otm;
    linkOtm.setAttribute("target", "_blank");
    cardLink.appendChild(linkOtm);

    hostelContainer.appendChild(card);
     }
    
    
}

getHostel();
