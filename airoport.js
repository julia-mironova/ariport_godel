const departures = "departures";
const arrivals = "arrivals";
let arrToDisplay = [...flights];
const headersDeparture =
	"<tr><th class='canSorted' id='airline'>Airline</th><th class='canSorted' id='flight' width='15%'>Flight N</th><th class='canSorted' id='destination'>Destination</th><th class='canSorted' id='departure'>Time departure</th><th>Time arrival (with time zone)</th><th>Gate</th><th class='canSorted' id='status'>Status</th></tr>";
const headersArrival =
	"<tr><th class='canSorted' id='airline'>Airline</th><th class='canSorted' id='flight'>Flight N</th><th class='canSorted' id='destination'>Destination</th><th>Time arrival</th><th class='canSorted' id='status'>Status</th></tr>";

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
		tHead.innerHTML = headersDeparture;
		let all = arrToDisplay
			.filter((e) => e.gate != undefined)
			.map(
				(e) => `<tr>
  <td>${e.alname}</td>
  <td>${e.fnr}</td>
  <td>${e.apname}</td>
  <td>${e.sched.slice(11, 19)}</td>
  <td>${
		e.schedArr === undefined ? "--" : e.schedArr.slice(11, e.schedArr.length)
	}</td>
  <td>${e.gate}</td>
  <td>${e.status}</td>
  </tr>`
			)
			.join("");
		tRows.innerHTML = `${all}`;
	} else {
		tHead.innerHTML = headersArrival;
		let all = arrToDisplay
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
function sortAlphabetDown(field) {
	return (a, b) => (a[field] >= b[field] ? 1 : -1);
}

function sortAlphabetUp(field) {
	return (a, b) => (a[field] <= b[field] ? 1 : -1);
}

function chooseFieldForSort(e) {
	let sortField;
	switch (e) {
		case "airline":
			sortField = "alname";
			break;
	}
}

let calckClik = 1;
tHead.onclick = (e) => {
	let typeOfSort = "default";
	e.target.id.length == 0 ? "don't need sort" : (typeOfSort = e.target.id);
	calckClik % 2
		? arrToDisplay.sort(sortAlphabetDown("alname"))
		: arrToDisplay.sort(sortAlphabetUp("alname"));
	buildTable();
	calckClik++;
};

//TODO: need calck unified and make it for all fields

changeBackground();
buildTable();

optionOfTable.addEventListener("click", function () {
	changeBackground();
	buildTable();
});
