/**
 * @jest-environment node
 */

const Server = require('../../server');

describe('addFormRoute', () => {
  it('should return with status code 200', async () => {
    const options = {
      method: 'POST',
      url: '/add',
      payload: {
        name: 'codeAcad2019',
        responseID: '3',
        firstName: 'kimi',
        lastName: 'raik',
      },
    };
    const response = await Server.inject(options);
    expect(response.statusCode).toEqual(200);
  });
});
