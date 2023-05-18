const fs = require('fs');

const path = '/streamers.json';

function readFile() {
  return JSON.parse(fs.readFileSync('./streamers.json'));
}

function appendToFile(data) {
  fs.writeFileSync('./streamers.json', JSON.stringify(data, null, 4), { encoding: 'utf8' });
}

module.exports = {
  appendToFile,
  readFile,
  path,
};
