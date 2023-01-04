const db = require("../models");
const Masuk = db.masuk;
const Kelola = db.kelola;

exports.create = (req, res) => {
  if (!req.body.kelolaId) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
    
  const masuk = {
    kelolaId: req.body.kelolaId,
    stok: req.body.stok,
    userId: req.body.userId,
  };
    
  Masuk.create(masuk)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Masuk."
    });
  });
};

exports.findAll = (req, res) => {
  Masuk.findAll({include: [{model: Kelola}]})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving kelolas."
    });
  });
}