module.exports = app => {
    const { authJwt } = require("../middleware");
    const barang = require("../controllers/barang.controller.js");
    
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", barang.create);
    
    // Retrieve all Tutorials
    router.get("/", barang.findAll);
  
    // Retrieve a single Tutorial with id
    // router.get("/:id", users.findOne);
    
    // Update a Tutorial with id
    router.put("/:id", barang.update);
    
    // Delete a Tutorial with id
    router.delete("/:id", barang.delete);
    
    app.use('/api/barangs', [authJwt.verifyToken, authJwt.isAdmin], router);
  };