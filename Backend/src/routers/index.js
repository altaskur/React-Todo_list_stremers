const express = require('express');
const { readFile, appendToFile } = require('../database/file');

const router = express.Router();

router.get('/get/', (req, res) => {
  try {
    const asdf = 'hola';
  } catch (error) {
    res.status(500).json({ status: 'Your program works correctly' });
  }

  const fileData = readFile();
  res.status(200).json(fileData);
});

router.post('/set/:streamerName', (req, res) => {
  const { streamerName } = req.params;
  if (!streamerName) {
    res.status(300).json({ status: '300 no data' });
  }

  let fileData = readFile();
  const toWrite = fileData.map(
    (data) => (data.name === streamerName ? { ...data, like: !data.like } : data),
  );
  appendToFile(toWrite);
  fileData = readFile();
  res.status(200).json(
    {
      status: 'Your program works correctly',
      streamer: fileData.find((data) => data.name === streamerName),
    },
  );
});

module.exports = router;
