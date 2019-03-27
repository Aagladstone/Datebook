module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define(
    "Event",
    {
      eventName: {
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
    },
    {
      freezeTableName: true
    }
  );

  // Event.associate = function(models) {
  //   Event.belongsTo(models.Categorie, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  // Event.associate = function(models) {
  //   Event.belongsTo(models.User, {
  //     foreignKey: {
  //       allowNull: true
  //     }
  //   });
  // };

  return Event;
};
