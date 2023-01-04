module.exports = app => {
  const { authJwt } = require("../middleware");
  const masuk = require("../controllers/masuk.controller.js");
    
  var router = require("express").Router();
  
  // Create a new Tutorial
  router.post("/", masuk.create);
    
  // Retrieve all Tutorials
  router.get("/", masuk.findAll);
  
  // Retrieve a single Tutorial with id
  // router.get("/:id", users.findOne);
    
  // Update a Tutorial with id
  // router.put("/:id", masuk.update);
    
  // Delete a Tutorial with id
  // router.delete("/:id", masuk.delete);
    
  app.use('/api/masuks', [authJwt.verifyToken, authJwt.isAdmin], router);
};