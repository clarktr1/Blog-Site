const router = require('express').Router();
const Blog = require('../models/blog');
const User = require('../models/user')

router.get('/', async (req, res) => {
  const userData = req.session.user
  const allBlogs = await Blog.findAll({
    include: [
    {
      model: User,
      attributes: ['username']
    }
  ]
  });
  console.log(req.session)
  res.render('homepage', {title: 'Tech Blog Home', user: userData, blog: allBlogs })
});

router.get('/login', async (req, res) => {
  const userData = req.session.user
  if(userData && userData.logged_in){
    res.redirect('/')
  }
  res.render('login', {title: 'Login', user: userData,});
});

router.get('/signup', async (req, res) => {
  const userData = req.session.user
  const allBlogs = await Blog.findAll({
    include: [
    {
      model: User,
      attributes: ['username']
    }
  ]
  });
  
  if(userData && userData.logged_in){
    res.redirect('/')
  } res.render('signup', {title: 'Sign Up', user: userData,});

});

router.get('/dashboard', async (req, res) => {
  const userData = req.session.user
  if(userData && userData.logged_in){
    res.render('dashboard', {title: 'Dashboard', user: userData,});
  } else
    res.redirect('/login')
});

router.get('/create', async (req, res) => {
  const userData = req.session.user
  if (!userData && !userData.logged_in){
    res.redirect('/login')
  } 
  res.render('create', {title: 'Create Post', user: userData,})
})

module.exports = router;
