const router = require('express').Router();
const { User, Project } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    //we need to get the list of projects and their creators for display

    res.render('home', { layout: 'main' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/Dashboard', async (req, res) => {
  try {
    //we need to get the list of projects and their creators for display

    res.render('dashboard', { layout: 'main' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/Register', async (req, res) => {
  try {
    //we need to get the list of projects and their creators for display

    res.render('register', { layout: 'main' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/Login', async (req, res) => {
  try {
    //we need to get the list of projects and their creators for display

    res.render('login', { layout: 'main' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/Logout', async (req, res) => {
  try {
    //we need to get the list of projects and their creators for display

    res.render('logout', { layout: 'main' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
