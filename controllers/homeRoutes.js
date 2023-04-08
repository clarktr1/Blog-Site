const router = require('express').Router();
const { User, Blog, Comment } = require('../models');

router.get('/', async (req, res) => {
  const userData = req.session.user
  const allBlogs = await Blog.findAll({
    order: [['createdAt', 'DESC']],
    include: [
    {
      model: User,
      attributes: ['username']
    }
  ]
  });
  console.log(allBlogs)
  res.render('homepage', {title: 'Tech Blog Home', user: userData, blogs: allBlogs})
});

router.get('/login', async (req, res) => {
  const userData = req.session.user

  if(userData && userData.logged_in){
    res.redirect('/dashboard')
  }
  res.render('login', {title: 'Login'});
});

router.get('/signup', async (req, res) => {
  const userData = req.session.user

  if(userData && userData.logged_in){
    res.redirect('/dashboard')
  } res.render('signup', {title: 'Sign Up'});

});

router.get('/dashboard', async (req, res) => {
  const userData = req.session.user
  if(userData && userData.logged_in){
    const userBlogs = await Blog.findAll({
      where: {
        author: userData.id
      }
    })
    res.render('dashboard', {title: 'Dashboard', user: userData, blog: userBlogs});
  } else
    res.redirect('/login')
});

router.get('/create', async (req, res) => {
  const userData = req.session.user

   res.render('create', {title: 'Create Post', user: userData,})
})

module.exports = router;
