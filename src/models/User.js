const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },

      displayName: {
        type: DataTypes.STRING,
      },

      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },

      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },

      image: {
        type: DataTypes.STRING,
      },
    },
    { underscored: true, timestamps: false, tableName: 'users' }
  );

  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
      foreignKey: 'blogPostId',
      as: 'blogPosts'
    });
  };


  return User;
};

module.exports = UserModel;
