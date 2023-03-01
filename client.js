const net = require("net");

const connect = function (data) {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // this takes in data that server sends and displays it in client terminal
  conn.on("data", (data) => {
    console.log("Game says: ", data);
  });

  // message displayed in client terminal as soon as client is connected to game server
  // also sends name to server - will be displayed on the board
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: ELI");
  });

  // // client sends command to move up - experimented with set interval which moves up every 50ms
  // conn.on("connect", () => {
  //   // setInterval(() => {
  //   //   conn.write("Move: up");;
  //   // }, 50);

  // });

// interpret incoming data as text
  conn.setEncoding("utf8");

 return conn;
};

module.exports = {
  net,
  connect
};

const { IP, PORT } = require("./constants");