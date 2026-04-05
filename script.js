document.getElementById("check-result-btn").addEventListener("click", function () {

const q1 = document.querySelector('input[name="q1"]:checked');
const q2 = document.querySelector('input[name="q2"]:checked');
const q3 = document.querySelector('input[name="q3"]:checked');
const q4 = document.querySelector('input[name="q4"]:checked');

if (!q1 || !q2 || !q3 || !q4) {
document.getElementById("checklist-result").innerText =
"Lūdzu atbildi uz visiem jautājumiem";
return;
}

let result = [];

result.push(
"1. jautājums: " +
(q1.parentElement.textContent.includes("Katru") ? "Pareizi" : "Nepareizi")
);

result.push(
"2. jautājums: " +
(q2.parentElement.textContent.includes("Jā") ? "Pareizi" : "Nepareizi")
);

result.push(
"3. jautājums: " +
(q3.parentElement.textContent.includes("Jā") ? "Pareizi" : "Nepareizi")
);

result.push(
"4. jautājums: " +
(q4.parentElement.textContent.includes("Jā") ? "Pareizi" : "Nepareizi")
);

document.getElementById("checklist-result").innerHTML =
result.join("<br>");

});

document.querySelectorAll("#quiz details").forEach(item => {
item.addEventListener("toggle", function() {

if (this.open) {
this.style.background = "#f0fdf4";
} else {
this.style.background = "#fff";
}

});
});