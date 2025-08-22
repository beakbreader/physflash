const flashcards = [
  { q: "What is an electric current?", a: "The flow of electric charge, usually carried by electrons, through a conductor." },
  { q: "SI unit of electric current?", a: "Ampere (A), one coulomb per second." },
  { q: "Formula for current?", a: "I = Q / t" },
  { q: "What is potential difference (voltage)?", a: "Work done per unit charge to move a charge between two points." },
  { q: "What is resistance?", a: "A measure of how much a material opposes the flow of electric current." },
  { q: "Ohm’s Law?", a: "V = IR" },
  { q: "Electrical Power formula?", a: "P = VI" },
  { q: "Current in a series circuit?", a: "Same everywhere in the circuit." },
  { q: "Voltage in a series circuit?", a: "Shared across components, sum of voltages = total voltage." },
  { q: "Voltage in a parallel circuit?", a: "Each branch receives the full source voltage." },
  { q: "Current in a parallel circuit?", a: "Splits between branches depending on resistance." }
];

let currentIndex = 0;
let flipped = false;

const cardInner = document.getElementById("card-inner");
const front = document.getElementById("card-front");
const back = document.getElementById("card-back");
const counter = document.getElementById("counter");

function loadCard(index) {
  flipped = false;
  cardInner.style.transform = "rotateY(0deg)";
  front.textContent = flashcards[index].q;
  back.textContent = flashcards[index].a;
  counter.textContent = `Card ${index + 1} of ${flashcards.length}`;
}

document.getElementById("flipBtn").addEventListener("click", () => {
  flipped = !flipped;
  cardInner.style.transform = flipped ? "rotateY(180deg)" : "rotateY(0deg)";
});

document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentIndex < flashcards.length - 1) {
    currentIndex++;
    loadCard(currentIndex);
  }
});

document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    loadCard(currentIndex);
  }
});

loadCard(currentIndex);
