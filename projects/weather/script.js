async function get_location() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(show_weather);
    } else {
        window.alert("Geolocation is not supported by this browser");
    }
}

async function createChart(data) {
    const today = new Date().toISOString().split("T")[0];

    const todayIndices = data.time
        .map((t, index) => ({ date: t.split("T")[0], hour: t.split("T")[1], index }))
        .filter(entry => entry.date === today);

    const xValues = todayIndices.map(entry => entry.hour);
    const yValues = todayIndices.map(entry => data.temperature_2m[entry.index]);

    new Chart("chart", {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: "rgba(0,0,255,1.0)",
                borderColor: "rgba(0,0,255,0.5)",
                data: yValues,
                fill: false
            }]
        },
		options: {
			legend: {display: false}
		}
    });
}

async function show_weather(position) {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
    const data = await response.json();

    document.getElementById("temperature").innerHTML = data.current.temperature_2m + " " + data.current_units.temperature_2m;
    document.getElementById("humidity").innerHTML = data.current.relative_humidity_2m + " " + data.current_units.relative_humidity_2m;

	console.log(data)
    createChart(data.hourly);
}

document.getElementById("button").addEventListener("click", get_location);
