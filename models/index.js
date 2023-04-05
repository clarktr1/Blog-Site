const User = require('./user');
const Blog = require('./blog')
const Session = require('./session')
const Comment = require('./comments')

Blog.belongsTo(User, {foreignKey: 'id'})

module.exports = { User, Blog, Session, Comment};