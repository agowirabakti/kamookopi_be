module.exports = app => {
  const { authJwt } = require("../middleware");
  const kelola = require("../controllers/kelola.controller.js");
    
  var router = require("express").Router();
  
  // Create a new Tutorial
  router.post("/", kelola.create);
    
  // Retrieve all Tutorials
  router.get("/", kelola.findAll);
  
  // Retrieve a single Tutorial with id
  // router.get("/:id", users.findOne);
    
  // Update a Tutorial with id
  router.put("/:id", kelola.update);
    
  // Delete a Tutorial with id
  router.delete("/:id", kelola.delete);
    
  app.use('/api/kelolas', [authJwt.verifyToken, authJwt.isAdmin], router);
};