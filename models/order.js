'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('orders', {
    event_id: DataTypes.INTEGER,
    buyer_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    total_price: DataTypes.INTEGER,
    status: DataTypes.STRING,
    attachment: DataTypes.STRING
  }, {});
  order.associate = function(models) {
    // associations can be defined here
    order.belongsTo(models.events, {
      as: "Event",
      foreignKey: "event_id",
    })
  };
  return order;
};