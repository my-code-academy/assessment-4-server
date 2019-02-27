/**
 * @jest-environment node
 */

const Server = require('../../server');

describe('addFormFields', () => {
  it('should return with status code 200', async () => {
    const options = {
      method: 'POST',
      url: '/add/schema',
      payload: {
        name: 'codeAcad2019',
        responseID: '',
        firstName: '',
        lastName: '',
      },
    };
    const response = await Server.inject(options);
    expect(response.statusCode).toEqual(200);
  });
});
