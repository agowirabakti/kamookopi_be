module.exports = (sequelize, Sequelize) => {
  const Keluar = sequelize.define("barang_keluar", {
    stok: {
      type: Sequelize.INTEGER
    },
    id_kelola: {
      type: Sequelize.INTEGER
    },
    id_barang: {
      type: Sequelize.INTEGER
    },
    id_user: {
      type: Sequelize.INTEGER
    }
  });
  
  return Keluar;
};