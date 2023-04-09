const router = require('express').Router();
const { Blog, User, Comment }= require('../../models')

router.post('/create', async (req, res) => {
    const userData = req.session.user
    try {
      const blogPost = await Blog.create({
      title: req.body.title,  
      description: req.body.description,
      content: req.body.content,
      author: userData.id
      });
      res.status(200).json(blogPost);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  });

  router.post('/comment', async (req, res) => {
    const userData = req.session.user
    try{
      const userID = userData.id
      const newComment = await Comment.create({
        content: req.body.content,
        user_id: userID,
        blog_id: req.body.blog_id
      });
      res.status(200).json(newComment);
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  })

  router.get('/:id', async (req, res) => {
    const userData = req.session.user
    try {
      const blogData = await Blog.findByPk(req.params.id, {
        include: [
          {
          model: User,
          attributes: ['id', 'username']
          },
          {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ['username', 'created_At'], 
            },
          ]}
      ]
      });
      console.log(blogData)
      res.render('blogpost', {title: blogData.title, blog: blogData, user: userData})
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get('/', async (req, res) => {
    try {
      const allBlogs = await Blog.findAll()
      res.status(200).json(allBlogs)
    } catch (err) {
      res.status(500).json(err);
    };
  })

  router.delete('/delete', async (req, res) => {
    try {
      const blogthatwilldieapainfulDeath = await Blog.destroy({
        where:{
          id: req.body.id
        }
      });
      res.status(200).json(blogthatwilldieapainfulDeath)
    } catch(err) {
      console.error(err)
      res.status(500).json(err)
    }
  })

  module.exports = router