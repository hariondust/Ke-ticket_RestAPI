'use strict';
module.exports = (sequelize, DataTypes) => {
  const event = sequelize.define('events', {
    title: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    starttime: DataTypes.DATE,
    endtime: DataTypes.DATE,
    price: DataTypes.INTEGER,
    desc: DataTypes.STRING,
    address: DataTypes.STRING,
    urlmap: DataTypes.STRING,
    image: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  event.associate = function(models) {
    // associations can be defined here
    event.belongsTo(models.categories, {
      as: "Category",
      foreignKey: "category_id",
    }),
    event.hasMany(models.orders, {
      as: "orderId",
      foreignKey: "event_id",
    }),
    event.belongsTo(models.users, {
      as: "CreatedBy",
      foreignKey: "user_id",
    })
  };
  return event;
};