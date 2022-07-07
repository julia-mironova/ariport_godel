const departures = "departures";
const arrivals = "arrivals";

const tRows = document.getElementById("table");
const tHead = document.getElementById("table-head");

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

//table for arrivals or departures
function buildTable() {
	if (optionOfTable.value === departures) {
		tHead.innerHTML =
			"<tr><th class='canSorted'>Airline</th><th class='canSorted'>Flight N</th><th>Destination</th><th>Time expected</th><th class='canSorted'>Time schedule</th><th>Gate</th><th class='canSorted'>Status</th></tr>";
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
	} else {
		tHead.innerHTML =
			"<tr><th class='canSorted'>Airline</th><th class='canSorted'>Flight N</th><th>Destination</th><th class='canSorted'>Status</th></tr>";
		let all = flights
			.filter((e) => e.gate == undefined)
			.map(
				(e) => `<tr>
  <td>${e.alname}</td>
  <td>${e.fnr}</td>
  <td>${e.apname}</td>
  <td>${e.status}</td>
  </tr>`
			)
			.join("");
		tRows.innerHTML = `${all}`;
	}
}

changeBackground();
buildTable();

optionOfTable.addEventListener("click", function () {
	changeBackground();
	buildTable();
});
