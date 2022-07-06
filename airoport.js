console.log(flyghts);
const tRows = document.getElementById("table");

let oneGate = flyghts[0].gate;
let all = flyghts
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

console.log(all);

tRows.innerHTML = `${all}`;
