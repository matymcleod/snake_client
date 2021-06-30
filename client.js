const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: '50542'
  });

  conn.setEncoding("utf8");

  conn.on("data", (message) => {
    console.log(`Message from server: ${message}`);
  })

  conn.on("connect", () => {
    console.log('You are now connected');
    conn.write('Name: MAT');
  });

  return conn;
};

console.log("Connecting...");

connect();

module.exports = {
  connect,
};