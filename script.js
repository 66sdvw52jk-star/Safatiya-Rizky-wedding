const params = new URLSearchParams(window.location.search);

const guestName =
  params.get("to") || "Tamu Undangan";

document.getElementById("guestName").textContent = guestName;


// BUKA UNDANGAN + MUSIK

const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");
const main = document.getElementById("main");
const music = document.getElementById("bgMusic");

openBtn.addEventListener("click", function () {

  opening.classList.add("hidden");
  main.classList.remove("hidden");

  music.play().catch(function () {
    console.log("Musik belum dapat diputar.");
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


// COUNTDOWN

const weddingDate =
  new Date("September 12, 2026 08:00:00 GMT+0700").getTime();

function countdown() {

  const now = new Date().getTime();

  const distance = weddingDate - now;

  if (distance <= 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    return;
  }

  const days = Math.floor(
    distance / (1000 * 60 * 60 * 24)
  );

  const hours = Math.floor(
    (distance / (1000 * 60 * 60)) % 24
  );

  const minutes = Math.floor(
    (distance / (1000 * 60)) % 60
  );

  const seconds = Math.floor(
    (distance / 1000) % 60
  );

  document.getElementById("days").textContent =
    String(days).padStart(2, "0");

  document.getElementById("hours").textContent =
    String(hours).padStart(2, "0");

  document.getElementById("minutes").textContent =
    String(minutes).padStart(2, "0");

  document.getElementById("seconds").textContent =
    String(seconds).padStart(2, "0");
}

countdown();

setInterval(countdown, 1000);


// SALIN NOMOR REKENING

function copyBank() {

  const number =
    document.getElementById("bankNumber").textContent;

  navigator.clipboard.writeText(number);

  alert("Nomor rekening berhasil disalin 🤍");

}
