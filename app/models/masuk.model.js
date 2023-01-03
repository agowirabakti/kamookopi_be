module.exports = (sequelize, Sequelize) => {
  const Masuk = sequelize.define("barang_masuk", {
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
  
  return Masuk;
};