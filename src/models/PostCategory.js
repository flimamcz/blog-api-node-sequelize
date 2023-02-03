const PostCategoryModel = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    {
      postId: {
        type: DataTypes.STRING,
        field: 'post_id',
      },

      categoryId: {
        type: DataTypes.STRING,
        field: 'category_id',
      },
    },
    { underscored: true, timestamps: false, tableName: 'posts_categories' }
  );

    // Deixei 100 neuronios aqui.

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blog_posts',
      through: PostCategory,
      foreignKey: 'category_id',
      otherKey: 'post_id',
    });


    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'post_id',
      otherKey: 'category_id',
    });
  };

  return PostCategory;
};

module.exports = PostCategoryModel;
