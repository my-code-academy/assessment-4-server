const model = require('../../models');

describe('forms addForm', () => {
  beforeEach(async () => {
    await model.forms.truncate();
  });
  const formData = {
    name: 'codeAcad2019',
    responseID: '3',
    firstName: 'kimi',
    lastName: 'raik',
  };

  it('should make 2 entries in the database with the  given information', async () => {
    await model.forms.addForm(formData);
    expect(await model.forms.count()).toEqual(2);
  });
  it('should make an entry in the database with the  given information', async () => {
    const formsDetail = await model.forms.addForm(formData);
    expect(formsDetail).toEqual('created successfully');
  });
  it('should display "Already exists" if row already exists', async () => {
    await model.forms.addForm(formData);
    expect(await model.forms.addForm(formData)).toEqual('Already exists');
  });
});
