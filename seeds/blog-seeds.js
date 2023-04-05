const { Blog } = require('../models/');
const sequelize = require('../config/connection'); 

const blogSeeds = [
  {
    title: "The Importance of Cybersecurity",
    description: 'Cybersecurity is important.',
    content: "In today's digital age, cybersecurity is more important than ever. With the rise of cyber attacks and data breaches, it's crucial for individuals and businesses to take steps to protect themselves online. This blog post explores the importance of cybersecurity and provides tips for staying safe online.",
    author: '1'
  },
  {
    title: "The Future of Artificial Intelligence",
    description: 'Ai is important.',
    content: "Artificial intelligence (AI) is rapidly advancing and has the potential to revolutionize many industries. From self-driving cars to personalized healthcare, AI has the power to transform the way we live and work. This blog post takes a look at the future of AI and its potential impact on society.",
    author: '2'
  },
  {
    title: "The Benefits of Remote Work",
    description: 'Remote Work is important.',
    content: "Remote work has become increasingly popular in recent years, and for good reason. It offers many benefits, such as increased flexibility, improved work-life balance, and reduced commuting time. This blog post explores the advantages of remote work and provides tips for making it work for you.",
    author: '3'
  }
];

const seedBlogs = async () => {
  try {
    await sequelize.sync({ force: true })
    await Blog.bulkCreate(blogSeeds);
    console.log('Blog seeds created successfully!');
  } catch (err) {
    console.log(err);
  }
};

module.exports = { seedBlogs }