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
  app.delete("api/event/:id", function(req, res) {
    console.log(req);
    db.Event.destroy({
      where: { id: req.params.id }
    }).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });
};
