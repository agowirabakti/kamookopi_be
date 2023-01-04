module.exports = (sequelize, Sequelize) => {
  const Kelola = sequelize.define("kelola", {
    stok: {
      type: Sequelize.INTEGER
    },
    barangId: {
      type: Sequelize.INTEGER
    },
    userId: {
      type: Sequelize.INTEGER
    }
  });

  return Kelola;
};