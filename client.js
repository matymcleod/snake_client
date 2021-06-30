const net = require("net");
const { IP, PORT } = require("./constants");

// Establish connection to game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // Interprets input data as text
  conn.setEncoding("utf8"); 

  // Receives messages from server
  conn.on("data", (message) => {
    console.log(`Message from server: ${message}`);
  })
  // Prints message upon successful connection with server and outputs name to game server
  conn.on("connect", () => {
    console.log('You are now connected');
    conn.write('Name: MAT'); 
  });

  return conn;
};

// Message to print once request to connect to server is executed
console.log("Connecting..."); 

// Exports connect function to be usable by other files
module.exports = {
  connect,
};