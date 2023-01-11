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
};

exports.findAllOne = (req, res) => {
  const id = req.params.id;
  Masuk.findAll({where: { kelolaId: id }})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving kelolas."
    });
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Masuk.destroy({where: { kelolaId: id }})
  .then(num => {
    if (num == 1) {
      res.send({message: "Masuk was deleted successfully!"});
    } else {
      res.send({message: `Cannot delete Masuk with id=${id}. Maybe Masuk was not found!`});
    }
  })
  .catch(err => {
    res.status(500).send({message: "Could not delete Masuk with id=" + id});
  });
};