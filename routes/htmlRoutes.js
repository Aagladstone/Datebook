var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.User.findAll({}).then(function(dbExamples) {
      db.Event.findAll({}).then(function(dbEvent) {
        res.render("index", {
          user: dbExamples,
          event: dbEvent
        });
      });
    });
  });

  // app.get("/", function(req, res) {
  //   db.Event.findAll({}).then(function(dbEvent) {
  //     res.render("index", {
  //       event: dbExamples
  //     });
  //   });
  // });

  // Load example page and pass in an example by id
  app.get("/event/:id", function(req, res) {
    db.Event.findAll({ where: { category: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("index", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
