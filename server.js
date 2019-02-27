const hapi = require('hapi');
const addFormRoute = require('./routes/addForm.route');

const server = hapi.server({
  port: 7777,
  host: 'localhost',
});

const init = async () => {
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

server.route(addFormRoute);

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();

module.exports = server;
