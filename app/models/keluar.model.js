module.exports = (sequelize, Sequelize) => {
  const Keluar = sequelize.define("keluar", {
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

  return Keluar;
};