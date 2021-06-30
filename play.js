const connect = require("./client");

const setupInput = require("./input");

// Message to print once request to connect to server is executed
console.log("Connecting..."); 

setupInput(connect());
