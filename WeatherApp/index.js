
let weather = {
	apiKey: "0d50a83b92b83b16a77e01b61aae8c52",
	getWeather: function(city) {
		fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city +"&units=metric&appid=" + this.apiKey)
		.then((response) => response.json())
		.then((data) => this.showWeather(data))
	},
	showWeather: function(data){
		const { name } = data;
		const { feels_like, temp, humidity} = data.main;
		const { description, icon } = data.weather[0];
		const { speed } = data.wind;
		document.querySelector(".city").innerText = `Today in ${name}`;
		document.querySelector(".description").innerText = description;
		document.querySelector(".icon").setAttribute("src", "http://openweathermap.org/img/wn/" + icon + "@2x.png");
		document.querySelector(".feels-like").innerText = `Feels like: ${feels_like}°C`;
		document.querySelector(".temp").innerText = `${temp}°C`;
		document.querySelector(".humidity").innerText = `Humidity: ${humidity}%`;
		document.querySelector(".wind-speed").innerText = `Wind speed: ${speed}km/h`;
        document.querySelector(".weather-details").classList.remove("processing");
	},
	search: function(){
		let searchItem = document.querySelector(".search-box").value;
		this.getWeather(searchItem);
	}
}
const getDetails = () =>{
	weather.search()
}
let button = document.querySelector(".search-button");
button.addEventListener("click", getDetails)

let searchWeather = document.querySelector(".search-box");
searchWeather.addEventListener("keyup", (e)=>{
	if (e.key == "Enter"){
		weather.search()
	}
})

weather.getWeather("London")
