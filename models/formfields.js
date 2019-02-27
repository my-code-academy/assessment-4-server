

module.exports = (sequelize, DataTypes) => {
  const formfields = sequelize.define('formfields', {
    name: DataTypes.STRING,
    field: DataTypes.STRING,
  }, {});

  formfields.getAllFieldsOfAForm = formName => formfields.findAll({
    attributes: ['field'],
    where: {
      name: formName,
    },
  });

  formfields.getAllFormNames = () => formfields.findAll({
    attributes: ['name', 'createdAt'],
  });

  const addRowToFormsTable = (formName, field) => formfields.findOrCreate({
    where: {
      name: formName, field,
    },
  }).spread((userResult, created) => {
    if (created) {
      return 'created successfully';
    }
    return 'Already exists';
  });

  formfields.addFormSchema = (formData) => {
    const formName = formData.name;
    console.log('heel', formData);
    let insertionStatus = '';
    Object.keys(formData).forEach((field) => {
      if (field !== 'name') {
        insertionStatus = addRowToFormsTable(formName, field);
      }
    });
    return insertionStatus;
  };

  return formfields;
};
