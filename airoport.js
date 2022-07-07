const departures = "departures";
const arrivals = "arrivals";

console.log(flights[0].schedArr.slice(11, flights[0].schedArr.length));

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
			"<tr><th class='canSorted'>Airline</th><th class='canSorted'>Flight N</th><th class='canSorted'>Destination</th><th class='canSorted'>Time departure</th><th>Time arrival (with time zone)</th><th>Gate</th><th class='canSorted'>Status</th></tr>";
		let all = flights
			.filter((e) => e.gate != undefined)
			.map(
				(e) => `<tr>
  <td>${e.alname}</td>
  <td>${e.fnr}</td>
  <td>${e.apname}</td>
  <td>${e.sched.slice(11, 19)}</td>
  <td>${
		e.schedArr === undefined ? "-" : e.schedArr.slice(11, e.schedArr.length)
	}</td>
  <td>${e.gate}</td>
  <td>${e.status}</td>
  </tr>`
			)
			.join("");
		tRows.innerHTML = `${all}`;
	} else {
		tHead.innerHTML =
			"<tr><th class='canSorted'>Airline</th><th class='canSorted'>Flight N</th><th class='canSorted'>Destination</th><th>Time arrival</th><th class='canSorted'>Status</th></tr>";
		let all = flights
			.filter((e) => e.gate == undefined)
			.map(
				(e) => `<tr>
  <td>${e.alname}</td>
  <td>${e.fnr}</td>
  <td>${e.apname}</td>
  <td>${e.sched.slice(11, 19)}</td>
  <td>${e.status}</td>
  </tr>`
			)
			.join("");
		tRows.innerHTML = `${all}`;
	}
}

//sort the table

changeBackground();
buildTable();

optionOfTable.addEventListener("click", function () {
	changeBackground();
	buildTable();
});
