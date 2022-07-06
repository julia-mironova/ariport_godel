console.log(flyghts);
const tRows = document.getElementById("table");

let oneGate = flyghts[0].gate;
let all = flyghts.map((e) => `<tr><td>${e.gate}</td></tr>`).join("");

console.log(all);

tRows.innerHTML = `${all}`;
