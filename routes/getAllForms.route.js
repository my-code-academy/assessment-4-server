const model = require('../models');

module.exports = [{
  method: 'GET',
  path: '/',
  config: {
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with'],
    },
  },
  handler: async (request, h) => {
    const allforms = await model.forms.getAllForms();
    return allforms;
  },
}];
