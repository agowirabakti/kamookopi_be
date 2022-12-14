const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
  // logging: true,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model")(sequelize, Sequelize);
db.role = require("./role.model.js")(sequelize, Sequelize);
db.barang = require("./barang.model")(sequelize, Sequelize);
db.kelola = require("./kelola.model")(sequelize, Sequelize);
db.masuk = require("./masuk.model")(sequelize, Sequelize);
db.keluar = require("./keluar.model")(sequelize, Sequelize);
// db.history = require("./history.model")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.kelola.belongsTo(db.barang, {foreignKey: "barangId"})

db.masuk.belongsTo(db.kelola, {foreignKey: "kelolaId"})

db.keluar.belongsTo(db.kelola, {foreignKey: "kelolaId"})

db.ROLES = ["user", "admin"];

module.exports = db;