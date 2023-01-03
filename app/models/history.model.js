module.exports = (sequelize, Sequelize) => {
  const History = sequelize.define("history_barang", {
    stok: {
      type: Sequelize.INTEGER
    },
    keterangan: {
      type: Sequelize.STRING
    },
    id_kelola: {
      type: Sequelize.INTEGER
    },
    id_masuk: {
      type: Sequelize.INTEGER
    },
    id_keluar: {
      type: Sequelize.INTEGER
    },
    id_barang: {
      type: Sequelize.INTEGER
    },
    id_user: {
      type: Sequelize.INTEGER
    }
  });
  
  return History;
};