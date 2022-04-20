const router = require('express').Router();
const { Thought } = require('../../models');

router.post('/', async (req, res) => {
  try {
    res.status(200).json();
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
