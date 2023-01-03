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
  
    // app.use(function(req, res, next) {
    //   res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
    //   next();
    // });
  
    // app.get("/api/test/all", users.allAccess);
  
    // app.get("/api/test/user", [authJwt.verifyToken, authJwt.isUser], users.userBoard);
  
    // app.get("/api/test/admin", [authJwt.verifyToken, authJwt.isAdmin], users.adminBoard);
    
    app.use('/api/barangs', [authJwt.verifyToken, authJwt.isAdmin], router);
  };