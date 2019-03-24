var db = require("../models");

module.exports = function(app) {
  app.post("/api/event", function(req, res) {
    db.Event.create(req.body).then(function(dbEvent) {
      res.json(dbEvent);
    });
    console.log(req.body);
    console.log("route problem?");
  });
};
