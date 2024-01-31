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
