var db = require("../models");

module.exports = function(app) {
    app.get("/api/categorie", function(req, res) {
        db.Categorie.findAll({}).then(function(results) {
          res.json(results);
        });
    });
};
