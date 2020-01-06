'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('users', {
    name: DataTypes.STRING,
    dob: DataTypes.DATE,
    phone: DataTypes.INTEGER,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here
    user.hasMany(models.events, {
      as: "eventId",
      foreignKey: "user_id",
    })
  };
  return user;
};