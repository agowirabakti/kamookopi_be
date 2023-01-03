module.exports = (sequelize, Sequelize) => {
  const Barang = sequelize.define("barang", {
    kode_barang: {
      type: Sequelize.STRING
    },
    nama_barang: {
      type: Sequelize.STRING
    },
    id_user: {
      type: Sequelize.STRING
    }
  });
  
  return Barang;
};