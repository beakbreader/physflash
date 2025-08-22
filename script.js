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

const container = document.getElementById("flashcard-container");

flashcards.forEach(fc => {
  const card = document.createElement("div");
  card.className = "flashcard";

  card.innerHTML = `
    <div class="card-inner">
      <div class="card-front">${fc.q}</div>
      <div class="card-back">${fc.a}</div>
    </div>
  `;
  
  container.appendChild(card);
});
