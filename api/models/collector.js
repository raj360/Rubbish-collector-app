/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('collector', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    telephone: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: true,
      unique: "email"
    },
    numberPlate: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "numberPlate"
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    locationId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'location',
        key: 'id'
      }
    },
    ImageUrl: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'collector',
    timestamps: false,
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
        name: "email",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "numberPlate",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "numberPlate" },
        ]
      },
      {
        name: "FKcollector408916",
        using: "BTREE",
        fields: [
          { name: "locationId" },
        ]
      },
    ]
  });
};
