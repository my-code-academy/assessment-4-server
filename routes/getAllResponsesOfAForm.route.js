const model = require('../models');

module.exports = [{
  method: 'GET',
  path: '/form/data/{formName}',
  config: {
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with'],
    },
  },
  handler: async (request, h) => {
    const allforms = await model.forms.getAllResponsesOfAForm(request.params.formName);
    return allforms;
  },
}];
