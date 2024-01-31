/* INDEX */

const knap = document.querySelectorAll("img");

knap.forEach((img) => {
  img.addEventListener("click", hvilkenDrik);
});

function hvilkenDrik() {
  if (this.alt == "øl" || this.alt == "snaps") {
    console.log("Indeholder alkohol");
  } else {
    console.log("Alkoholfri");
  }
}

/* SIG GODDAG */

function sigGoddag() {
  let currentHours = new Date().getHours();

  if (currentHours >= 5 && currentHours < 10) {
    console.log("Godmorgen");
  } else if (currentHours >= 10 && currentHours < 18) {
    console.log("Goddag");
  } else if (currentHours >= 18 && currentHours < 24) {
    console.log("Godaften");
  } else {
    console.log("Godnat");
  }
}

sigGoddag();

/* GÆT ET TAL */

let tilfaeldigtTal = Math.round(Math.random() * 10);
const knap2 = document.querySelector("#submit");

knap2.addEventListener("click", erTalletRigtigt);

function erTalletRigtigt() {
  if (tilfaeldigtTal == document.querySelector("#tal").value) {
    alert("Tallet er rigtigt!");
  } else {
    alert("Tallet er forkert!");
  }
}

console.log(tilfaeldigtTal);
