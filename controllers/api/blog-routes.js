const router = require('express').Router();
const Blog = require('../../models/blog')

router.post('/create', async (req, res) => {
    try {
      const blogPost = await Blog.create({
      title: req.body.title,  
      content: req.body.content,
      author: req.body.author,
      });
      res.status(200).json("Post created successfully!");
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  });

  router.get('/:id', async (req, res) => {
    try {
      const blogData = await Blog.findByPk(req.params.id);
      console.log(blogData)
      res.render('homepage', {blog: blogData});
    } catch (err) {
      res.status(500).json(err);
    }
  });
  // router.get('/', async (req, res) => {
  //   try {
  //     const allBlogs = await Blog.findAll()
  //     res.render('homepage', {blog: allBlogs})
  //   } catch (err) {
  //     res.status(500).json(err);
  //   };
  // })

  module.exports = router