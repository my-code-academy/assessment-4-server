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
  handler: (request, h) => {
    const formData = request.payload;
    // console.log(request.payload);
    model.forms.addForm(formData);
    return 'added form';
  },
}];
