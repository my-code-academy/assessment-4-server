const model = require('../models');

module.exports = [{
  method: 'GET',
  path: '/form/{formName}',
  config: {
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with'],
    },
  },
  handler: async (request, h) => {
    const allforms = await model.formfields.getAllFieldsOfAForm(request.params.formName).map(form => form.field);
    return allforms;
  },
}];
