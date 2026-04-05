const resultButton = document.getElementById("check-result-btn");
const resultBox = document.getElementById("checklist-result");

if (resultButton && resultBox) {
  resultButton.addEventListener("click", function () {
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    const q4 = document.querySelector('input[name="q4"]:checked');

    if (!q1 || !q2 || !q3 || !q4) {
      resultBox.innerHTML = "Lūdzu, atbildi uz visiem jautājumiem.";
      return;
    }

    let score = 0;
    let results = [];

    if (q1.parentElement.textContent.includes("Katru dienu")) {
      results.push("1. jautājums: Pareizi");
      score++;
    } else {
      results.push("1. jautājums: Nepareizi");
    }

    if (q2.parentElement.textContent.includes("Jā")) {
      results.push("2. jautājums: Pareizi");
      score++;
    } else {
      results.push("2. jautājums: Nepareizi");
    }

    if (q3.parentElement.textContent.includes("Jā")) {
      results.push("3. jautājums: Pareizi");
      score++;
    } else {
      results.push("3. jautājums: Nepareizi");
    }

    if (q4.parentElement.textContent.includes("Jā")) {
      results.push("4. jautājums: Pareizi");
      score++;
    } else {
      results.push("4. jautājums: Nepareizi");
    }

    let finalMessage = "";

    if (score === 4) {
      finalMessage = "Lieliski! Tavi paradumi ir ļoti veselīgi.";
    } else if (score === 3) {
      finalMessage = "Ļoti labi! Tu jau daudz dari savas veselības labā.";
    } else if (score === 2) {
      finalMessage = "Nav slikti, bet vēl ir vieta uzlabojumiem.";
    } else {
      finalMessage = "Tev vajadzētu vairāk pievērst uzmanību veselīgiem paradumiem.";
    }

    resultBox.innerHTML = results.join("<br>") + "<br><br><strong>Kopējais rezultāts: " + score + "/4</strong><br>" + finalMessage;
  });
}

document.querySelectorAll("#quiz details").forEach((item) => {
  item.addEventListener("toggle", function () {
    if (this.open) {
      this.style.background = "#f0fdf4";
    } else {
      this.style.background = "#fff";
    }
  });
});