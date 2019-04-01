var Sequelize = require("sequelize");
var db = require("../models");
var moment = require("moment");
var Op = Sequelize.Op;


module.exports = function(app) {
  app.get("/:id", function(req, res) {
    db.User.findAll({}).then(function(dbExamples) {
      db.Event.findAll({
        where: {
          UserID: req.params.id,
          Date: {
            [Op.lt]: moment().format("YYYY-MM-DD")
          },
        },
          order: [
            ['Date', 'ASC'],
            ['Time', 'ASC']
          ],
              
        include:  [db.Categorie]
        
      }).then(function(dbEvent) {
        db.Event.findAll({
          where: {
            UserID: req.params.id,
            Date: moment().format("YYYY-MM-DD")
          }, 
          
          order: [
            ['Date', 'ASC'],
            ['Time', 'ASC']
          ],

          include:  [db.Categorie]

        }).then(function(dbEvent2) {
          db.Event.findAll({
            where: {
              UserID: req.params.id,
              Date: {
                [Op.gt]: moment().format("YYYY-MM-DD")
              }
            },
            order: [
              ['Date', 'ASC'],
              ['Time', 'ASC']
            ],
              
              include: [db.Categorie]
            
            
          }).then(function(dbEvent3) {
              // console.log(dbEvent3[0].dataValues.Categorie.dataValues.color);
            db.Categorie.findAll({}).then(function(dbCategorie) {
              res.render("index", {
                user: dbExamples,
                event: dbEvent,
                event2: dbEvent2,
                event3: dbEvent3,
                categorie: dbCategorie
              });
            });
          });
        });
      });
    });
  });
  app.get("/", function(req, res) {
    db.User.findAll({}).then(function(dbExamples) {
      res.render("index", {
        user: dbExamples
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
