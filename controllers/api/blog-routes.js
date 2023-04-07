const router = require('express').Router();
const { Blog, User }= require('../../models')

router.post('/create', async (req, res) => {
    const userData = req.session.user
    try {
      const blogPost = await Blog.create({
      title: req.body.title,  
      description: req.body.title,
      content: req.body.content,
      author: userData.id
      });
      res.status(200).json(blogPost);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  });

  router.get('/:id', async (req, res) => {
    try {
      const blogData = await Blog.findByPk(req.params.id, {
        include: {
          model: User,
          attributes: ['id', 'username']
        }
      });
      console.log(blogData.dataValues.user.dataValues.username)
      res.render('blogpost', {title: blogData.title, blog: blogData})
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