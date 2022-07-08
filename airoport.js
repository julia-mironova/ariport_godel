const departures = "departures";
const arrivals = "arrivals";
let arrToDisplay = [...flights];
const headersDeparture =
	"<tr><th class='canSorted' id='alname'>Airline</th><th class='canSorted' id='fnr' width='15%'>Flight N</th><th class='canSorted' id='apname'>Destination</th><th class='canSorted' id='sched'>Time departure</th><th>Time arrival (with time zone)</th><th>Gate</th><th class='canSorted' id='status'>Status</th></tr>";
const headersArrival =
	"<tr><th class='canSorted' id='alname'>Airline</th><th class='canSorted' id='fnr'>Flight N</th><th class='canSorted' id='apname'>Destination</th><th class='canSorted' id='sched'>Time arrival</th><th class='canSorted' id='status'>Status</th></tr>";

const tRows = document.getElementById("table");
const tHead = document.getElementById("table-head");
const refreshBtn = document.getElementById("startDisplay");

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

//sort the table by alphabet
function sortAlphabetDown(field) {
	return (a, b) => (a[field] >= b[field] ? 1 : -1);
}

function sortAlphabetUp(field) {
	return (a, b) => (a[field] <= b[field] ? 1 : -1);
}

//sort the table by date comparing
function sortDateDown(field) {
	return (a, b) => (new Date(a[field]) >= new Date(b[field]) ? 1 : -1);
}

function sortDateUp(field) {
	return (a, b) => (new Date(a[field]) <= new Date(b[field]) ? 1 : -1);
}

let calckClik = 1;

tHead.onclick = (e) => {
	let typeOfSort = "";
	e.target.id.length == 0 ? "don't need sort" : (typeOfSort = e.target.id);
	if (typeOfSort.length > 1) {
		if (typeOfSort !== "sched") {
			calckClik % 2
				? arrToDisplay.sort(sortAlphabetDown(typeOfSort))
				: arrToDisplay.sort(sortAlphabetUp(typeOfSort));
		} else {
			calckClik % 2
				? arrToDisplay.sort(sortDateDown(typeOfSort))
				: arrToDisplay.sort(sortDateUp(typeOfSort));
		}
		buildTable();
		calckClik++;
	}
};

//TODO: need by key === sched make correct sort

changeBackground();
buildTable();

optionOfTable.addEventListener("click", function () {
	changeBackground();
	buildTable();
});

//just to put to first table screen without refresh the page
refreshBtn.addEventListener("click", function () {
	arrToDisplay = [...flights];
	buildTable();
});
