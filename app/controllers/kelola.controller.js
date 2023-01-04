const db = require("../models");
const Kelola = db.kelola;
const Barang = db.barang;

exports.create = (req, res) => {
  if (!req.body.barangId) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
    
  const barang = {
    barangId: req.body.barangId,
    stok: req.body.stok,
    userId: req.body.userId,
  };
    
  Kelola.create(barang)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Kelola."
    });
  });
};

exports.findAll = (req, res) => {
  Kelola.findAll({include: [{model: Barang}]})
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

exports.update = (req, res) => {
  const id = req.params.id;

  Kelola.update(req.body, { where: { id: id } })
  .then(num => {
    if (num == 1) {
      res.send({message: "Kelola was updated successfully."});
    } else {
      res.send({message: `Cannot update Kelola with id=${id}. Maybe Kelola was not found or req.body is empty!`});
    }
  })
  .catch(err => {
    res.status(500).send({message: "Error updating Kelola with id=" + id});
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Kelola.destroy({where: { id: id }})
  .then(num => {
    if (num == 1) {
      res.send({message: "Kelola was deleted successfully!"});
    } else {
      res.send({message: `Cannot delete Kelola with id=${id}. Maybe Kelola was not found!`});
    }
  })
  .catch(err => {
    res.status(500).send({message: "Could not delete Kelola with id=" + id});
  });
};