let searchInput = document.getElementById("searchYourLocation");
let countryData = document.getElementById("countryData");
let dataList =[];
let currentTime;
async function getTemp(index) {
        let temp = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=3b0232c0a3a5402e813145139230108&q=${index}&days=3&aqi=no&alerts=no`);
        // let temp = await fetch(`https://api.weatherapi.com/v1/search.json?key=3b0232c0a3a5402e813145139230108&q=${index}`);
        let tempData =await temp.json();
        dataList =  tempData;
        let today = new Date(dataList.location.localtime);
        let weekday = new Date(dataList.location.localtime).toLocaleDateString('en-EN', { weekday: 'long' });
        let monthGet = new Date(dataList.location.localtime).toLocaleDateString('en-us', {day:"numeric",month:"long"});
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday","Saturday"];
         let nextDay = days[today.getDay() +1];
         let dayAfterTommoro = days[today.getDay() +2];
         if(dayAfterTommoro === undefined || nextDay === undefined){
         dayAfterTommoro = days[0]
         }
        let trs = `
        <div id="item" class="col-md-4 bg-tranparnt ">
        <div class="weatherInfo-item ">
          <div class="head  d-flex justify-content-between p-1">
            <div id="today">${weekday}</div>
            <div id="month">${monthGet}</div>
          </div>
          <div class="body p-2">
            <div class="country text-white fs-4">${dataList.location.name}</div>
            <div class="temperature d-flex align-items-center">
              <div id="degree" class="text-white fw-bold">${dataList.current.temp_c}<sup>o</sup>c</div>
              <img src ="${dataList.current.condition.icon}"  alt= ""/>
            </div>
            <div class="weatherStatus text-primary mb-4">
              ${dataList.current.condition.text}
            </div>
            <span class="text-white me-2"><img src="./images/icon-umberella.png" alt="" class="me-1">${dataList.current.cloud}%</span>
            <span class="text-white me-2"><img src="./images/icon-wind.png" alt="" class="me-1">${dataList.current.vis_km}km/h</span>
            <span class="text-white"><img src="./images/icon-compass.png" alt="" class="me-1">${dataList.current.wind_dir}</span>
          </div>
        </div>
      </div>
      <div id="item" class="col-md-4">
        <div class="weatherInfo-item bg-tranparnt">
            <div id="today2" class="head  text-center p-1">${nextDay}</div>
          <div class="body p-2 text-center">
            <img src="${dataList.forecast.forecastday[1].day.condition.icon}" class="mt-4"/>
            <div class="high-temperature fs-2 text-white mt-3">${dataList.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>c</div>
            <div class="low-temperature text-white">${dataList.forecast.forecastday[1].day.mintemp_c}<sup>o</sup></div>
            <div class="weatherStatus text-primary mb-3 mt-4">
             ${dataList.forecast.forecastday[1].day.condition.text}
            </div>
            </div>
          </div>
        </div>
        <div id="item" class="col-md-4">
        <div class="weatherInfo-item bg-tranparnt">
            <div id="today2" class="head  text-center p-1">${dayAfterTommoro}</div>
          <div class="body p-2 text-center">
            <img src="${dataList.forecast.forecastday[2].day.condition.icon}" class="mt-4"/>
            <div class="high-temperature fs-2 text-white mt-3">${dataList.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>c</div>
            <div class="low-temperature text-white">${dataList.forecast.forecastday[2].day.mintemp_c}<sup>o</sup></div>
            <div class="weatherStatus text-primary mb-3 mt-4">
             ${dataList.forecast.forecastday[2].day.condition.text}
            </div>
            </div>
          </div>
        </div>
        `
        countryData.innerHTML = trs;
       
}

console.log(currentTime);
getTemp('cairo')

searchYourLocation.addEventListener('input', async function(){
  await  getTemp(searchYourLocation.value.toLowerCase());
})




getTemp('cairo');





