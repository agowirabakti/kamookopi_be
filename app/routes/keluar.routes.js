module.exports = app => {
  const { authJwt } = require("../middleware");
  const keluar = require("../controllers/keluar.controller.js");
    
  var router = require("express").Router();
  
  // Create a new Tutorial
  router.post("/", keluar.create);
    
  // Retrieve all Tutorials
  router.get("/", keluar.findAll);
  
  // Retrieve a single Tutorial with id
  // router.get("/:id", users.findOne);
    
  // Update a Tutorial with id
  // router.put("/:id", masuk.update);
    
  // Delete a Tutorial with id
  // router.delete("/:id", masuk.delete);
    
  app.use('/api/keluars', [authJwt.verifyToken, authJwt.isAdmin], router);
};