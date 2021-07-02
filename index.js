/*$(document).ready(function(){
  $.ajax({
    url :"http://www.omdbapi.com/?apikey=[48390ddf] ",
    //اذا اردت ان يجدني
    data :{
      id :'48390ddf'
    }

}).done(function(user){
  console.log(user.id)
})
})*/

//API openweather
const api ={
  key :'361a6339c3c0363eed30196989922d2a',
  base_url :"https://api.openweathermap.org/data/2.5/"
}

//input search
const searchBox = document.querySelector('.search');

searchBox.addEventListener('keypress', setQuery);


function setQuery(e){
if(e.keyCode ==13){
  getResault(searchBox.value)
  //console.log(searchBox.value)
}
}

function getResault(query){
  fetch(`${api.base_url}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather =>{
      return weather.json()
    }).then(resault)
}

function resault(weather){
  console.log(weather)
  //name of city
  let city = document.querySelector('.location .city');
  city.innerHTML = `${weather.name}, ${weather.sys.country}`
  //date
  let nowDate =new Date()
  let date = document.querySelector('.location .date');
    date.innerText = getdat(nowDate);
    //TEMP
    let temp = document.querySelector('.current .temp');
    temp.innerHTML =`${Math.round(weather.main.temp)}<span>°C</span>`;
    //weather
    let current_weather = document.querySelector('.current .weather');
    current_weather.innerHTML =`${weather.weather[0].main}`;
    let clods = `${weather.weather[0].main}`;
    //change background
    if(typeof weather.main != "undifined" && weather.main.temp < 20){
      document.querySelector('.app-wrap').classList.add('cold');
    }
    else if(typeof weather.main != "undifined" && weather.main.temp > 30){
      document.querySelector('.app-wrap').classList.add('sun');
    }else{
      
      document.querySelector('.app-wrap').classList.remove();
    }

  //hilow
  let hilow = document.querySelector('.current .hi-low');
  hilow.innerHTML =`${weather.main.temp_max}<span>°C / </span>${weather.main.temp_min}</span>°C</span>`
}











function getdat(d){
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  
  return `${day} ${date} ${month} ${year}`;

}



//show weather
$(function(){
  $('.fa-cloud') .on('click',function(){

    $('.app-wrap').show(2000);
    $('.box div').show(5000);

    $('.hand').fadeOut(0);
    $(this).fadeOut(500);
    
   }
  )
  })