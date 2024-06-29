const apikey="602439f4ec6dc7dbdfdc5f7a966858d5";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");
async function checkweather(city){
    const response=await fetch(apiurl + city+ `&appid=${apikey}`);
    var data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";

        if(data.weather[0].main=="Clouds"){
                weatherIcon.src = "cloud.jpeg";
            } 
        else if(data.weather[0].main=="Clear"){
                weatherIcon.src = "/clear.png";
            }
        else if(data.weather[0].main=="Rain"){
                weatherIcon.Src = "rains2.jpeg";
            }
        else if(data.weather[0].main=="Drizzle"){
                weatherIcon.Src = "drizzle.jpeg";
            }
        else if(data.weather[0].main=="Mist"){
                weatherIcon.Src = "mist.jpeg";
            
           }
        }
        searchBtn.addEventListener("click",()=>{
        checkweather(searchBox.value);
    })