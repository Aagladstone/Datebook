module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [45]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [45]
      }
    },
  });

  User.associate = function(models) {
    User.hasMany(models.Event, {
      onDelete: "restrict",
      onUpdate: "restrict"
    });
  };

  return User;
};
