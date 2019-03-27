var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/user", function(req, res) {
    db.User.findAll({}).then(function(results) {
      res.json(results);
    });
  });
  // Create a new example
  app.post("/api/user", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
    console.log(req.body);
  });

  app.get("/api/event", function(req, res) {
    db.Event.findAll({}).then(function(results) {
      res.json(results);
      console.log(results);
    });
    console.log(results);
  });

  app.post("/api/event", function(req, res) {
    db.Event.create(req.body).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });
};
