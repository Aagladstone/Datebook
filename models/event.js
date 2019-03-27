module.exports = function(sequelize, DataTypes) {
    var Event = sequelize.define("Event", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
         len: [45]
      },
      notification: {
        type: DataTypes.BOOLEAN,
        default: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      time: {
        type: DataTypes.TIME,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [100]
      }
    });
  
    // Event.associate = function(models) {
    //   Event.belongsTo(models.Categorie, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    // };
  
    Event.associate = function(models) {
      Event.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Event;
  };
