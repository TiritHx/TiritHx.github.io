function untillNextYear(next_year){
	const diff = Date.parse(next_year) - Date.parse(new Date());
	const seconds = Math.floor((diff / 1000) % 60);
	const minutes = Math.floor((diff / 1000 / 60) % 60);
	const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
	const days = Math.floor(diff / (1000 * 60 * 60 * 24));
	return [days, hours, minutes, seconds]; // dodać do pojedyńczych cyfr 0, 9 -> 09
}
const update = () => {
	const new_year = new Date().getFullYear() + 1;
	const left = untillNextYear(`${new_year}-01-01`);
	document.getElementById("time").innerHTML = `${left[0]}:${left[1]}:${left[2]}:${left[3]}`;
}

setInterval(update, 1000);
