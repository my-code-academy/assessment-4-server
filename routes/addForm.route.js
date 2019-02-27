const model = require('../models');

module.exports = [{
  method: 'POST',
  path: '/add',
  config: {
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with'],
    },
  },
  handler: async (request, h) => {
    const formData = request.payload;
    // console.log(request.payload);
    const insertionStatus = await model.forms.addForm(formData);
    return insertionStatus;
  },
}];
