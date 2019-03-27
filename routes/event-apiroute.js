var db = require("../models");

module.exports = function(app) {
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

//   app.put("/api/event/:id", function(req, res) {
//     // Update takes in an object describing the properties we want to update, and
//     // we use where to describe which objects we want to update
//     db.Event.update(
//       {
//         eventName: req.body.text,
//         description: req.body.text,
//         date: req.body.text,
//         time: req.body.text,
//         notification: req.body.complete
//       },
//       {
//         where: {
//           id: req.body.id
//         }
//       }
//     ).then(function(dbEvent) {
//       res.json(dbEvent);
//     });
//   });

  app.delete("/api/event/:id", function(req, res) {
    console.log(req);
    db.Event.destroy({
      where: { id: req.params.id }
    }).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });
};
