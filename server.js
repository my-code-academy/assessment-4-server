const hapi = require('hapi');
const addFormRoute = require('./routes/addForm.route');
const getAllFormsRoute = require('./routes/getAllForms.route');

const server = hapi.server({
  port: 7777,
  host: 'localhost',
});

const init = async () => {
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

server.route(addFormRoute);
server.route(getAllFormsRoute);

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();

module.exports = server;
