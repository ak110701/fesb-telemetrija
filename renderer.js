const voltageGrid = document.getElementById("voltage-grid");
const tempGrid = document.getElementById("temp-grid");

function byteToVoltage(b) {
  return (b / 255) * 30;
}

function byteToTemp(b) {
  return 20 + (b / 255) * 50;
}

function createCells(gridEl, unit) {
  gridEl.innerHTML = "";
  for (let i = 0; i < 8; i++) {
    const card = document.createElement("div");
    card.className = "cell";
    card.innerHTML = `
      <div class="label">Cell ${i + 1}</div>
      <div class="value">-- ${unit}</div>
    `;
    gridEl.appendChild(card);
  }
}

function updateCells(gridEl, values, unit, decimals = 1) {
  const cards = gridEl.querySelectorAll(".cell .value");
  for (let i = 0; i < 8; i++) {
    const v = values[i];
    cards[i].textContent = `${v.toFixed(decimals)} ${unit}`;
  }
}

createCells(voltageGrid, "V");
createCells(tempGrid, "°C");

window.electronAPI.onFrame((frame) => {
  if (!frame || !Array.isArray(frame.data) || frame.data.length < 8) return;

  if (frame.id === 0x201) {
    const voltages = frame.data.slice(0, 8).map(byteToVoltage);
    updateCells(voltageGrid, voltages, "V", 2);
  }

  if (frame.id === 0x202) {
    const temps = frame.data.slice(0, 8).map(byteToTemp);
    updateCells(tempGrid, temps, "°C", 1);
  }
});
