/**
 * @jest-environment node
 */

const Server = require('../../server');

describe('getAllResponsesOfAForm', () => {
  it('should return with status code 200', async () => {
    const options = {
      method: 'GET',
      url: '/form/data/codeAcad2019',
    };
    const response = await Server.inject(options);
    expect(response.statusCode).toEqual(200);
  });
});
