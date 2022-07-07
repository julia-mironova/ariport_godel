const departures = "departures";
const arrivals = "arrivals";

const tRows = document.getElementById("table");

//table for departures
let all = flights
	.filter((e) => e.gate != undefined)
	.map(
		(e) => `<tr>
  <td>${e.alname}</td>
  <td>${e.fnr}</td>
  <td>${e.apname}</td>
  <td>${e.schedArr}</td>
  <td>${e.schedArr}</td>
  <td>${e.gate}</td>
  <td>${e.status}</td>
  </tr>`
	)
	.join("");

tRows.innerHTML = `${all}`;

//change background-image in table head
const headBI = document.getElementById("head");

let optionOfTable = document.getElementById("option");

function changeBackground() {
	optionOfTable = document.getElementById("option");
	if (optionOfTable.value === departures) {
		headBI.style.backgroundImage = "url('./img/departure.svg')";
	} else {
		headBI.style.backgroundImage = "url('./img/arrival.svg')";
	}
}

optionOfTable.addEventListener("click", function () {
	changeBackground();
});

changeBackground();

//table for arrivals
