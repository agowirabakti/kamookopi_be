module.exports = app => {
  const { authJwt } = require("../middleware");
  const users = require("../controllers/user.controller.js");
  
  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", users.create);
  
  // Retrieve all Tutorials
  router.get("/", users.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", users.findOne);
  
  // Update a Tutorial with id
  router.put("/:id", users.update);
  
  // Delete a Tutorial with id
  router.delete("/:id", users.delete);

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
    next();
  });

  app.get("/api/test/all", users.allAccess);

  app.get("/api/test/user", [authJwt.verifyToken, authJwt.isUser], users.userBoard);

  app.get("/api/test/admin", [authJwt.verifyToken, authJwt.isAdmin], users.adminBoard);
  
  app.use('/api/users', [authJwt.verifyToken, authJwt.isAdmin], router);
};