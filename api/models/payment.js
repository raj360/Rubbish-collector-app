/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payment', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.ENUM('PAID','PENDING','CANCLED'),
      allowNull: true,
      defaultValue: "PENDING"
    },
    cost: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    method: {
      type: DataTypes.ENUM('MOBILE MONEY','PAY ON PICK UP','CASH'),
      allowNull: true,
      defaultValue: "CASH"
    },
    serviceId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'service',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'payment',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "FKpayment111201",
        using: "BTREE",
        fields: [
          { name: "userId" },
        ]
      },
      {
        name: "FKpayment290737",
        using: "BTREE",
        fields: [
          { name: "serviceId" },
        ]
      },
    ]
  });
};
