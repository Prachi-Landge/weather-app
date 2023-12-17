const apikey = "a3dd00c9503114eb7f1fd4b223b648e5";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchButton = document.querySelector(".search button")
const weatherIcon = document.querySelector(".w-icon")

async function  checkweather(city){

    const response = await fetch(apiurl + city + `&appid=${apikey}`)

    //  404 error indicates that server can't find the requested resource
    // here if city name is wrong then  404 error will occur

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather-frame").style.display = "none";
    }else{
        var data = await response.json();
        
    // To change data with the help of api

        document.querySelector(".city").innerHTML= data.name;
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"°C";
        document.querySelector(".wind").innerHTML= data.wind.speed + " km/hr";
        document.querySelector(".humid").innerHTML= data.main.humidity+"%";
        
    // To change weather icon
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow.png";
        }
        document.querySelector(".weather-frame").style.display= "block";
        document.querySelector(".error").style.display = "none";
    }
    
}

// to check weather when click on search icon
searchButton.addEventListener('click',()=>{
    checkweather(searchBox.value)
})
