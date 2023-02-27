const net = require("net");

const connect = function (data) {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  conn.on("data", (data) => {
    console.log("Game says: ", data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });

  conn.on("connect", () => {
    conn.write("Name: ELI");
  });

// interpret incoming data as text
  conn.setEncoding("utf8");

 return conn;
};

module.exports = {
  net,
  connect
};