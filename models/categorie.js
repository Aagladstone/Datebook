module.exports = function(sequelize, DataTypes) {
  var Categorie = sequelize.define("Categorie", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
        validate: {
          len: [45]
        }
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [45]
      }
    }
  });

  Categorie.associate = function(models) {
    Categorie.hasMany(models.Event, {
      onDelete: "restrict",
      onUpdate: "restrict"
    });
  };

  return Categorie;
};
