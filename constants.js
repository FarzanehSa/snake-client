// a few consts for the app to use.

const IP = 'localhost'; // or IP address
const PORT = 50541;     // PORT number
const Name = 'F07';     // Snake ID


const movement = {  // control movement
  w: 'Move: up',
  a: 'Move: left',
  s: 'Move: down',
  d: 'Move: right'
}

const message = {  // send message to opponents
  l: 'Say: Good Luck',
  g: 'Say: Good Game',
  e: 'Say: Enjoy the Game'
}

module.exports = {IP, PORT, Name, movement, message};
