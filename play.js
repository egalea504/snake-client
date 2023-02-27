// const net = require("net");
const { net , connect } = require("./client.js");
const { setupInput } = require("./input");

console.log("Connecting ...");
//connect is passed in setupInput which will permit stdin to communicate with the server and pass the messages when pressing a key
setupInput(connect());