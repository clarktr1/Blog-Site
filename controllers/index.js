const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const userRoutes = require('./api/index');

router.use('/api', userRoutes);
router.use('/', homeRoutes);

module.exports = router;