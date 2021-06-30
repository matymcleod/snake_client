const net = require("net");
const { IP, PORT } = require("./constants");

// Establish connection to game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // Receives messages from server
  conn.on("data", (message) => {
    console.log(`Message from server: ${message}`);
  });
  // Prints message upon successful connection with server and outputs name to game server
  conn.on("connect", () => {
    console.log('You are now connected');
    conn.write('Name: MAT'); 
  });

  // Interprets input data as text
  conn.setEncoding("utf8"); 

  return conn;
};

// Exports connect function to be usable by other files
module.exports = connect;