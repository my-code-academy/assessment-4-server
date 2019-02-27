

module.exports = (sequelize, DataTypes) => {
  const forms = sequelize.define('forms', {
    name: DataTypes.STRING,
    responseID: DataTypes.STRING,
    field: DataTypes.STRING,
    fieldValue: DataTypes.STRING,
  }, {});

  forms.getAllForms = () => forms.findAll({
    attributes: ['responseID', 'field', 'fieldValue'],
  });

  forms.getAllResponsesOfAForm = formName => forms.findAll({
    attributes: ['responseID', 'field', 'fieldValue'],
    where: {
      name: formName,
    },
  });


  const addRowToFormsTable = (formName, responseID, field, fieldValue) => forms.findOrCreate({
    where: {
      name: formName, responseID, field, fieldValue,
    },
  }).spread((userResult, created) => {
    if (created) {
      return 'created successfully';
    }
    return 'Already exists';
  });

  forms.addForm = (formData) => {
    const formName = formData.name;
    const { responseID } = formData;
    let insertionStatus = '';
    Object.keys(formData).forEach((field) => {
      const fieldValue = formData[field];
      if (field !== 'name' && field !== 'responseID') {
        insertionStatus = addRowToFormsTable(formName, responseID, field, fieldValue);
      }
    });
    return insertionStatus;
  };

  forms.associate = function (models) {
    // associations can be defined here
  };
  return forms;
};
