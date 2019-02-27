

module.exports = (sequelize, DataTypes) => {
  const formfields = sequelize.define('formfields', {
    name: DataTypes.STRING,
    field: DataTypes.STRING,
  }, {});

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

  formfields.addForm = (formData) => {
    const formName = formData.name;
    let insertionStatus = '';
    Object.keys(formData).forEach((field) => {
      insertionStatus = addRowToFormsTable(formName, field);
    });
    return insertionStatus;
  };

  return formfields;
};
