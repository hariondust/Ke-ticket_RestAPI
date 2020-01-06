'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('categories', {
    name: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  category.associate = function(models) {
    // associations can be defined here
    category.hasMany(models.events, {
      as: "event_id",
      foreignKey: "category_id",
    })
  };
  return category;
};