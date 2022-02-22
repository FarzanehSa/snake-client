const {connect} = require('./client');
const {setupInput} = require('./input');

console.log("Connecting ...");

// pass the object returned from connect into the setupInput function.
const connection =  connect();
setupInput(connection);

