const model = require('../models');

module.exports = [{
  method: 'POST',
  path: '/add/schema',
  config: {
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with'],
    },
  },
  handler: async (request, h) => {
    const formData = request.payload;
    // console.log(request.payload);
    const insertionStatus = await model.formfields.addFormSchema(formData);
    return insertionStatus;
  },
}];
