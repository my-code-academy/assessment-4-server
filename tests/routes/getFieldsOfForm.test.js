/**
 * @jest-environment node
 */

const Server = require('../../server');

describe('getAFieldsOfForm', () => {
  it('should return with status code 200', async () => {
    const options = {
      method: 'GET',
      url: '/form/CodeAcad',
    };
    const response = await Server.inject(options);
    expect(response.statusCode).toEqual(200);
  });
});
