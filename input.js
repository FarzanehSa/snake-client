const {movement, message} = require('./constants');

// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = function(conn) {

  connection = conn; // conn is a reference to the object, returned by connect()

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  stdin.on("data", handleUserInput);

  // returns stdin object allows us to listen for keyboard input and react to it.
  return stdin;
};

const handleUserInput = function(key) {
  // exit by ctrl + c
  if (key === '\u0003') {
    process.exit();
  }
  // response to movement or message input
  if (movement[key] || message[key]) {
    connection.write(movement[key] || message[key]);
  }

};

module.exports = {setupInput};