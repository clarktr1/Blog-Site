const { User }  = require('../models/');
const sequelize = require('../config/connection'); 
const bcrypt = require('bcrypt');

const userSeeds = [
  {
    username: 'john_doe',
    email: 'john_doe@example.com',
    password: bcrypt.hashSync('password1', 10)
  },
  {
    username: 'jane_smith',
    email: 'jane_smith@example.com',
    password: bcrypt.hashSync('password1', 10)
  },
  {
    username: 'bob_johnson',
    email: 'bob_johnson@example.com',
    password: bcrypt.hashSync('password1', 10)
  }
];

const seedUsers = async () => {
    try {
      await sequelize.sync({ force: true })
      await User.bulkCreate(userSeeds);
      console.log('User seeds created successfully!');
    } catch (err) {
      console.log(err);
    }
  };

  module.exports = { seedUsers };