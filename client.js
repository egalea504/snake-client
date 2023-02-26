const net = require("net");

const connect = function (data) {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  conn.on("data", (data) => {
    console.log("Game says: ", data);
  });

// interpret incoming data as text
  conn.setEncoding("utf8");

 return conn;
};

module.exports = {
  net,
  connect
};