const model = require('../../models');

describe('formfields addForm', () => {
  beforeEach(async () => {
    await model.formfields.truncate();
  });
  const formData = {
    name: 'codeAcad2019',
    responseID: '',
    firstName: '',
    lastName: '',
  };

  it('should make 4 entries in the database with the  given information', async () => {
    await model.formfields.addFormSchema(formData);
    expect(await model.formfields.count()).toEqual(4);
  });
  it('should make an entry in the database with the  given information', async () => {
    const formsDetail = await model.formfields.addFormSchema(formData);
    expect(formsDetail).toEqual('created successfully');
  });
  it('should display "Already exists" if row already exists', async () => {
    await model.formfields.addFormSchema(formData);
    expect(await model.formfields.addFormSchema(formData)).toEqual('Already exists');
  });
});
