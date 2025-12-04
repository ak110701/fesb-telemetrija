// renderer.js

// Funkcija koja generira nasumičan broj između 1 i 100
function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

const numbersDiv = document.getElementById('numbers');

// Odmah prikažemo prvi broj
let current = generateRandomNumber();
numbersDiv.textContent = current;
console.log('Random broj:', current);

// Svakih 1000 ms (1s) generiramo i ispisujemo novi broj
setInterval(() => {
  const randomNum = generateRandomNumber();
  numbersDiv.textContent = randomNum;
  console.log('Random broj:', randomNum);
}, 1000);
