module.exports = (sequelize, Sequelize) => {
  const Masuk = sequelize.define("masuk", {
    stok: {
      type: Sequelize.INTEGER
    },
    kelolaId: {
      type: Sequelize.INTEGER
    },
    userId: {
      type: Sequelize.INTEGER
    }
  });

  return Masuk;
};