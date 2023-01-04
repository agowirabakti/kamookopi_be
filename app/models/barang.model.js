module.exports = (sequelize, Sequelize) => {
  const Barang = sequelize.define("barang", {
    kode_barang: {
      type: Sequelize.STRING
    },
    nama_barang: {
      type: Sequelize.STRING
    },
    userId: {
      type: Sequelize.INTEGER
    }
  });

  return Barang;
};