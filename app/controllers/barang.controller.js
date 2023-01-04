const db = require("../models");
const Barang = db.barang;

exports.create = (req, res) => {
  if (!req.body.nama_barang) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  
  const barang = {
    kode_barang: req.body.kode_barang,
    nama_barang: req.body.nama_barang,
    userId: req.body.userId,
  };
  
  Barang.create(barang)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Barang."
    });
  });
};

exports.findAll = (req, res) => {
  Barang.findAll()
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving barangs."
    });
  });
}

exports.update = (req, res) => {
  const id = req.params.id;

  Barang.update(req.body, { where: { id: id } })
  .then(num => {
    if (num == 1) {
      res.send({message: "Barang was updated successfully."});
    } else {
      res.send({message: `Cannot update Barang with id=${id}. Maybe User was not found or req.body is empty!`});
    }
  })
  .catch(err => {
    res.status(500).send({message: "Error updating Barang with id=" + id});
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Barang.destroy({where: { id: id }})
  .then(num => {
    if (num == 1) {
      res.send({message: "Barang was deleted successfully!"});
    } else {
      res.send({message: `Cannot delete Barang with id=${id}. Maybe Barang was not found!`});
    }
  })
  .catch(err => {
    res.status(500).send({message: "Could not delete Barang with id=" + id});
  });
};