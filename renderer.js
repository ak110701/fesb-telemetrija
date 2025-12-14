const list = document.getElementById("can-list");

window.electronAPI.onFrame((frame) => {
  const item = document.createElement("li");

  item.textContent = 
    `ID: ${frame.id} | DATA: [${frame.data.join(", ")}] | TIME: ${frame.timestamp}`;

  list.prepend(item);
});

