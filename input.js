// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = function (conn) {

  connection = conn; // conn is a reference to the object, returned by connect()

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  stdin.on("data", handleUserInput);

  // returns stdin object allows us to listen for keyboard input and react to it.
  return stdin;
};

const handleUserInput = function (key) {
  // exit by ctrl + c
  if (key === '\u0003') {
    process.exit();
  }
  // key to move up
  if (key === 'w') {
    // console.log('Move: up');
    connection.write('Move: up')
  }
  // key to move left
  if (key === 'a') {
    // console.log('Move: left');
    connection.write('Move: left');
  }
  // key to move down
  if (key === 's') {
    // console.log('Move: down');
    connection.write('Move: down');
  }
  // key to move right
  if (key === 'd') {
    // console.log('Move: right');
    connection.write('Move: right');
  }
  
};

module.exports = {setupInput};