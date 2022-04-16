const router = require('express').Router();
const { User, Project } = require('../models');

router.get('/', async (req, res) => {
  try {
    //we need to get the list of projects and their creators for display
    let data = await Project.findAll({
      raw: true,
      nest: true,
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    console.log(data);
    res.render('home', { data: data });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/Dashboard', async (req, res) => {
  try {
    //we need to get the list of projects and their creators for display

    res.render('dashboard', {});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/NewProject', async (req, res) => {
  try {
    //we need to get the list of projects and their creators for display

    res.render('newproject', {});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/Register', async (req, res) => {
  try {
    //we need to get the list of projects and their creators for display

    res.render('register', {});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/Login', async (req, res) => {
  try {
    //we need to get the list of projects and their creators for display

    res.render('login', {});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/Logout', async (req, res) => {
  try {
    //we need to get the list of projects and their creators for display

    res.render('logout', {});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
