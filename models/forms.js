
module.exports = (sequelize, DataTypes) => {
  const forms = sequelize.define('forms', {
    name: DataTypes.STRING,
    field: DataTypes.STRING,
    fieldValue: DataTypes.STRING,
  }, {});


  forms.addForm = (formData) => {
    const formName = formData.name;
    Object.keys(formData).forEach((field) => {
      const fieldValue = formData[field];
      if (field !== 'name') {
        forms.findOrCreate({
          where: {
            name: formName, field, fieldValue,
          },
        }).spread((userResult, created) => {
          if (created) {
            return 'created successfully';
          }
          return 'Already exists';
        });
      }
    });
  };

  forms.associate = function (models) {
    // associations can be defined here
  };
  return forms;
};
