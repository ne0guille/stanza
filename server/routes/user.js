const express = require('express');
const router = express.Router();
const eventList = require('../mocks/event-lists.json');

/* GET users listing. */
router.get('/', (req, res) => {
  res.sendStatus(200).json(eventList);
});

module.exports = router;
