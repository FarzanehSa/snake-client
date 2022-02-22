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
  switch (key) {
  case '\u0003' : // exit by ctrl + c
    process.exit();
  case 'w' : // key to move up
    connection.write('Move: up');
    break;
  case 'a' : // key to move left
    connection.write('Move: left');
    break;
  case 's' : // key to move down
    connection.write('Move: down');
    break;
  case 'd' : // key to move right
    connection.write('Move: right');
    break;
  case 'l' : // key to message
    connection.write('Say: Good Luck');
    break;
  case 'g' : // key to message
    connection.write('Say: Good Game');
    break;
  case 'e' : // key to message
    connection.write('Say: Enjoy the Game');
    break;
  }
};

module.exports = {setupInput};