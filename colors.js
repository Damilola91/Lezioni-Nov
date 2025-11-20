const colors = [
  "#e74c3c",
  "#3498db",
  "#2ecc71",
  "#f1c40f",
  "#9b59b6",
  "#e67e22",
  "#1abc9c",
];

const casualIndexColor = Math.floor(Math.random() * colors.length);
const secretColor = colors[casualIndexColor];

const container = document.querySelector("#squares-container");

const [firstHint, secondHint] = colors;

colors.forEach((color) => {
  const smallSquare = document.createElement("div");
  smallSquare.classList.add("small-square");
  smallSquare.style.backgroundColor = color;

  smallSquare.addEventListener("click", () => {
    const message = document.querySelector("#message");
    color === secretColor
      ? ((message.textContent = `🎉 Hai indovinato il colore segreto! (${secretColor})`),
        document
          .querySelectorAll(".small-square")
          .forEach((sq) => (sq.style.backgroundColor = secretColor)))
      : (message.textContent = `😅 Riprova! Prova uno tra: ${firstHint} o ${secondHint}`);
  });

  container.appendChild(smallSquare);
});
