let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = (data) => {
  // this tells server to move up when you press w
  if (data === 'w') {
    connection.write('Move: up');

  // this tells server to move left when you press a
  } else if (data === 'a') {
    connection.write('Move: left');

  // this tells server to move down when you press s
  } else if (data === 's') {
    connection.write('Move: down');

  // this tells server to move right when you press d
  } else if (data === 'd') {
    connection.write('Move: right');

  } else if
  // \u0003 maps to ctrl+c input
  (data === '\u0003') {
  process.exit();

}};

module.exports = {
  setupInput
};