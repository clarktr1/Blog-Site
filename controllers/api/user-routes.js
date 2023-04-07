const router = require('express').Router();
const { User } = require('../../models/');



router.post('/signup', async (req, res) => {
  try {
    const dbUserData = await User.create({
    username: req.body.username,    
    email: req.body.email,
    password: req.body.password,
    });
    const userData = await User.findOne({ where: { email: req.body.email } });
    const user = {
      id: userData.id,
      username: userData.username,
      logged_in: true
    }
    req.session.user = user;
    res.redirect('/dashboard')
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.post('/login', async (req, res) => {
  try {
    console.error('logging')
    const userData = await User.findOne({ where: { email: req.body.email } });
    console.error(userData)
    if (!userData) {
      return res.status(400).json({ message: 'Incorrect email or password, please try again' });
    }

    const validPassword = userData.checkPassword(req.body.password);
    if (!validPassword) {
      return res.status(400).json({ message: 'Incorrect email or password, please try again' });
    }

    if (userData && validPassword){
      const user = {
        id: userData.id,
        username: userData.username,
        logged_in: true
      }
      console.log(user)
      req.session.user = user; 
      console.log(req.session.user)
      res.status(200).json({ user: userData, message: 'You are now logged in!' })
    };
  } catch (err) {
    console.error(err)
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.user.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;

