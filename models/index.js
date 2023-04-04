const User = require('./user');
const Blog = require('./blog')
const Session = require('./session')

Blog.belongsTo(User, {foreignKey: 'id'})

module.exports = { User, Blog };