function randomByte() {
  return Math.floor(Math.random() * 256); 
}

function startCAN(interfaceName, onMessageCallback) {
  console.log("CAN simulator (cells) pokrenut na:", interfaceName);

  setInterval(() => {
    const voltageFrame = {
      id: 0x201,
      data: Array.from({ length: 8 }, () => randomByte()),
      timestamp: Date.now()
    };

    const temperatureFrame = {
      id: 0x202,
      data: Array.from({ length: 8 }, () => randomByte()),
      timestamp: Date.now()
    };

    onMessageCallback(voltageFrame);
    onMessageCallback(temperatureFrame);
  }, 1000);
}

module.exports = { startCAN };
