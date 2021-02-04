var DataTypes = require("sequelize").DataTypes;
var _appointment = require("./appointment");
var _collector = require("./collector");
var _location = require("./location");
var _payment = require("./payment");
var _review = require("./review");
var _service = require("./service");
var _user = require("./user");

function initModels(sequelize) {
  var appointment = _appointment(sequelize, DataTypes);
  var collector = _collector(sequelize, DataTypes);
  var location = _location(sequelize, DataTypes);
  var payment = _payment(sequelize, DataTypes);
  var review = _review(sequelize, DataTypes);
  var service = _service(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  appointment.belongsTo(user, { foreignKey: "userId"});
  user.hasMany(appointment, { foreignKey: "userId"});
  appointment.belongsTo(collector, { foreignKey: "collectorId"});
  collector.hasMany(appointment, { foreignKey: "collectorId"});
  collector.belongsTo(location, { foreignKey: "locationId"});
  location.hasMany(collector, { foreignKey: "locationId"});
  payment.belongsTo(user, { foreignKey: "userId"});
  user.hasMany(payment, { foreignKey: "userId"});
  payment.belongsTo(service, { foreignKey: "serviceId"});
  service.hasMany(payment, { foreignKey: "serviceId"});
  review.belongsTo(user, { foreignKey: "userId"});
  user.hasMany(review, { foreignKey: "userId"});
  review.belongsTo(appointment, { foreignKey: "appointmentId"});
  appointment.hasMany(review, { foreignKey: "appointmentId"});
  service.belongsTo(appointment, { foreignKey: "appointmentId"});
  appointment.hasMany(service, { foreignKey: "appointmentId"});
  user.belongsTo(location, { foreignKey: "locationId"});
  location.hasMany(user, { foreignKey: "locationId"});

  return {
    appointment,
    collector,
    location,
    payment,
    review,
    service,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
