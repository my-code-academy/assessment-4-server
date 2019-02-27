const hapi = require('hapi');
const addFormRoute = require('./routes/addForm.route');
const getAllFormsRoute = require('./routes/getAllForms.route');
const addFormFieldsRoute = require('./routes/addFormFields.route');
const getAllFormNames = require('./routes/getAllFormsNames.route');
const getAllFieldsOfFormRoute = require('./routes/geFieldsOfForm.route');
const getAllResponsesOfAForm = require('./routes/getAllResponsesOfAForm.route');

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
server.route(addFormFieldsRoute);
server.route(getAllFieldsOfFormRoute);
server.route(getAllResponsesOfAForm);
server.route(getAllFormNames);

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();

module.exports = server;
