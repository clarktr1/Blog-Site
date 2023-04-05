const { seedBlogs } = require('./blog-seeds');
const { seedUsers }= require('./user-seeds');
const { seedComments }= require('./comment-seeds');

const seedAll = async () => {
    seedUsers();
    seedBlogs();
    seedComments();
}

seedAll()