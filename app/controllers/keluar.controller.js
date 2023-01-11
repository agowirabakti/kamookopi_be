const db = require("../models");
const Keluar = db.keluar;
const Kelola = db.kelola;

exports.create = (req, res) => {
  if (!req.body.kelolaId) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
    
  const keluar = {
    kelolaId: req.body.kelolaId,
    stok: req.body.stok,
    userId: req.body.userId,
  };
    
  Keluar.create(keluar)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Keluar."
    });
  });
};

exports.findAll = (req, res) => {
  Keluar.findAll({include: [{model: Kelola}]})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving keluars."
    });
  });
};

exports.findAllOne = (req, res) => {
  const id = req.params.id;
  
  Keluar.findAll({where: { kelolaId: id }})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving keluars."
    });
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Keluar.destroy({where: { kelolaId: id }})
  .then(num => {
    if (num == 1) {
      res.send({message: "Keluar was deleted successfully!"});
    } else {
      res.send({message: `Cannot delete Keluar with id=${id}. Maybe Keluar was not found!`});
    }
  })
  .catch(err => {
    res.status(500).send({message: "Could not delete Keluar with id=" + id});
  });
};