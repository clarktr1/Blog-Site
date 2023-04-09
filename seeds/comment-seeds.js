const { Comment } = require('../models');
const sequelize = require('../config/connection'); 

const commentSeeds = [
  {
    content: "Great post, thanks for sharing!",
    user_id: 1,
    blog_id: 1,
  },
  {
    content: "I found this really helpful, thanks!",
    user_id: 2,
    blog_id: 1
  },
  {
    content: "Interesting perspective, I hadn't thought of that before.",
    user_id: 3,
    blog_id: 2
  }
];

const seedComments = async () => {
  try {
    await sequelize.sync({ force: true })
    await Comment.bulkCreate(commentSeeds);
    console.log('Comment seeds created successfully!');
  } catch (err) {
    console.log(err);
  }
}

module.exports = { seedComments }