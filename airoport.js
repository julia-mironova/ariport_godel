const tRows = document.getElementById("table");

let oneGate = flights[0].gate;
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
