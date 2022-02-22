const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',// or IP address
    port: 50541 // PORT number
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

/*   // handle first established connection and prints a message
  conn.on("connect", () => {
    console.log('Connect Successfully')
  }); */
  
  // handle incoming data and console.log it for the player.
  conn.on("data", (data) => {
    console.log('Message from Game Server:   ',data)
  });

  return conn;
};

module.exports = {connect};