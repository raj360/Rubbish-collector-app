/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    telephone: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "email"
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
    imageUrl: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user',
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
        name: "FKuser485125",
        using: "BTREE",
        fields: [
          { name: "locationId" },
        ]
      },
    ]
  });
};
