module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
        validate: {
          len: [45]
        }
    },
    notification: {
      type: DataTypes.BOOLEAN,
      default: 0,
        validate: {
          len: [1]
        }
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
        validate: {
          len: [100]
        }
    }
  });

  Event.associate = function(models) {
    Event.belongsTo(models.Categorie, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  Event.associate = function(models) {
    Event.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;
};
