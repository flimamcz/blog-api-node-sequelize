const BlogPostModel = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
    'BlogPost',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },

      title: {
        type: DataTypes.STRING,
      },

      content: {
        type: DataTypes.STRING,
      },

      userId: {
        type: DataTypes.STRING,
        field: 'user_id'
      },

      published: {
        type: DataTypes.DATE,
      },

      updated: {
        type: DataTypes.DATE,
      },
    },

    { underscored: true, timestamps: false, tableName: 'blog_posts' }
  );

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(
      models.User,
      { foreignKey: 'user_id', as: 'user' }
    );
  };

  return BlogPost;
};

module.exports = BlogPostModel;
