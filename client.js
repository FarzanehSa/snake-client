const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',// or IP address
    port: 50541 // PORT number
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // handle first established connection and prints a message
  // give a name to snake
  conn.on("connect", () => {
    console.log('Successfully connected to game server');
    conn.write('Name: FA7')
  });
  
/*   // handle connection and move up as soon as connection stablished
  conn.on("connect", () => {
    conn.write('Move: up')
    setTimeout(() => {
      conn.write('Move: right')
    },50)
    // setInterval(() => {
    //   conn.write('Move: up')
    // },50)
  }); */

  // handle incoming data and console.log it for the player.
  conn.on("data", (data) => {
    console.log('Message from Game Server:   ',data)
  });

  // returns a conn object that allowes us to interact with the server.
  return conn;
};

module.exports = {connect}