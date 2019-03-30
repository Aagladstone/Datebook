var db = require("../models");

module.exports = function(app) {
  app.post("/api/event", function(req, res) {
    db.Event.create(req.body).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

  app.delete("/api/event/:id", function(req, res) {
    db.Event.destroy({
      where: { id: req.params.id }
    }).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });
};
