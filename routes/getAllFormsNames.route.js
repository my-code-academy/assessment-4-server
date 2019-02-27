const model = require('../models');

module.exports = [{
  method: 'GET',
  path: '/forms/names',
  config: {
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with'],
    },
  },
  handler: async (request, h) => {
    const allforms = await model.formfields.getAllFormNames().map(form => ({ name: form.name, date: new Date(form.createdAt).setMilliseconds(0) }));
    console.log(allforms);
    const uniqueformNames = new Set();
    const result = allforms.filter(item => (!uniqueformNames.has(JSON.stringify(item)) ? uniqueformNames.add(JSON.stringify(item)) : false));
    return result;
  },
}];
