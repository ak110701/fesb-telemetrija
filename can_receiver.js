function startCAN(interfaceName, onMessageCallback) {
    console.log("CAN simulator pokrenut na sučelju:", interfaceName);
    setInterval(() => {
        const frame = {
            id: Math.floor(Math.random() * 2048),
            data: [
                Math.floor(Math.random() * 256),
                Math.floor(Math.random() * 256),
                Math.floor(Math.random() * 256),
                Math.floor(Math.random() * 256)
            ],
            timestamp: Date.now()
        };  
        onMessageCallback(frame);
    },1000);
}

module.exports={startCAN};