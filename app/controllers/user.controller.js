const db = require("../models");
const User = db.user;

var bcrypt = require("bcryptjs");

exports.create = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const user = {
    name: req.body.name,
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 8),
    status: req.body.status ? req.body.status : 0
  };

  User.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

exports.findAll = (req, res) => {
  User.findAll()
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving tutorials."
    });
  });
}

exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
  .then(data => {
    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `Cannot find user with id=${id}.`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Error retrieving User with id=" + id
    });
  });
};

exports.update = (req, res) => {
  const id = req.params.id;

  User.update(req.body, { where: { id: id } })
  .then(num => {
    if (num == 1) {
      res.send({message: "User was updated successfully."});
    } else {
      res.send({message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`});
    }
  })
  .catch(err => {
    res.status(500).send({message: "Error updating User with id=" + id});
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  User.destroy({where: { id: id }})
  .then(num => {
    if (num == 1) {
      res.send({message: "User was deleted successfully!"});
    } else {
      res.send({message: `Cannot delete User with id=${id}. Maybe User was not found!`});
    }
  })
  .catch(err => {
    res.status(500).send({message: "Could not delete User with id=" + id});
  });
};

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};