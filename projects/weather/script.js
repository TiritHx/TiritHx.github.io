async function get_location() {
  	if(navigator.geolocation){
    	await navigator.geolocation.getCurrentPosition(show_weather);
  	} 
	else{ 
    	window.alert("Geolocation is not supported by this browser");
  	}
}
let data;
async function show_weather(position){
	await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`)
	.then(response => response.json())
	.then(response => data = response);
	await console.log(data);
	document.getElementById("temperature").innerHTML = data.current.temperature_2m;
	document.getElementById("humidity").innerHTML = data.current.relative_humidity_2m;
}
document.getElementById("button").addEventListener("click", get_location);
