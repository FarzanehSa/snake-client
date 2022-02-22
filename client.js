const net = require("net");
const {IP, PORT, Name} = require('./constants');

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // handle first established connection and prints a message
  // give a name to snake
  conn.on("connect", () => {
    console.log('Successfully connected to game server');
    conn.write(`Name: ${Name}`)
  });
  
  // handle incoming data and console.log it for the player.
  conn.on("data", (data) => {
    console.log('Message from Game Server:   ',data)
  });

  // returns a conn object that allowes us to interact with the server.
  console.log(conn);
  return conn;
};

module.exports = {connect}