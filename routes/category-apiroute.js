// var db = require("../models");

// module.exports = function(app) {
//   // Get all examples

//   // Create a new example
//   app.post("/api/user", function(req, res) {
//     db.User.create(req.body).then(function(dbUser) {
//       res.json(dbUser);
//     });
//     console.log(req.body);
//   });

//   // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(
//       dbExample
//     ) {
//       res.json(dbExample);
//     });
//   });
// };
