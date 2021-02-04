/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('appointment', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.ENUM('CONFIRMED','ACCEPTED','PENDING'),
      allowNull: true,
      defaultValue: "PENDING"
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    collectorId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'collector',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'appointment',
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
        name: "FKappointmen545742",
        using: "BTREE",
        fields: [
          { name: "userId" },
        ]
      },
      {
        name: "FKappointmen397345",
        using: "BTREE",
        fields: [
          { name: "collectorId" },
        ]
      },
    ]
  });
};
