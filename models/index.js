const User = require('./user');
const Blog = require('./blog')
// const Session = require('./session')
const Comment = require('./comments')

Blog.belongsTo(User, {
  foreignKey: 'author',
   allowNull: false
  });

Blog.hasMany(Comment, {
    onDelete: 'cascade'
  });

Comment.belongsTo(Blog, {
    foreignKey: {
        name: 'blog_id',
        allowNull: false
    }
  });

  Comment.belongsTo(User, {
    foreignKey: {
        name: 'user_id',
        allowNull: false
    }
  })

module.exports = { User, Blog, Comment};