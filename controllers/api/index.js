const router = require('express').Router();
const userRoutes = require('./user-routes')
const blogRoutes = require('./blog-routes')

router.use('/blog', blogRoutes)
router.use('/user', userRoutes);

module.exports = router
