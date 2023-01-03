module.exports = (sequelize, Sequelize) => {
  const Kelola = sequelize.define("kelola_barang", {
    stok: {
      type: Sequelize.INTEGER
    },
    id_barang: {
      type: Sequelize.INTEGER
    },
    id_user: {
      type: Sequelize.INTEGER
    }
  });
  
  return Kelola;
};