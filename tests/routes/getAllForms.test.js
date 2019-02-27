/**
 * @jest-environment node
 */

const Server = require('../../server');

describe('getAllFormsRoute', () => {
  it('should return with status code 200', async () => {
    const options = {
      method: 'GET',
      url: '/',
    };
    const response = await Server.inject(options);
    expect(response.statusCode).toEqual(200);
  });
});
