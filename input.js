let connection;

const handleUserInput = (data) => {

    if (data === '\u0003') {
      process.exit();
    }

    if (data === 'w') {
      connection.write('Move: up');
    }
    
    if (data === 's') {
      connection.write('Move: down');
    }
    
    if (data === 'a') {
      connection.write('Move: left');
    }
        
    if (data === 'd') {
      connection.write('Move: right');
    }

    if (data === '1') {
      connection.write('Say: tsss ss sssss tsssss!');
    }

    if (data === '2') {
      connection.write('Say: Ss! sssssssss sssssss sss');
    }

    if (data === '3') {
      connection.write('Say: SSSS SSSS!');
    }
};

const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

module.exports = setupInput;