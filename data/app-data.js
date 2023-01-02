// Data layer
let urls = [];

// Push a json object to array of data
function seedData() {
  urls.length = 0;

  urls.push({
    url: 'http://github.comhttp://github.comhttp://github.com',
    shortCode: 'gh',
    dateCreated: new Date('2022-12-20T19:02:33'),
    visits: 5
  });

  urls.push({
    url: 'http://rore.com',
    shortCode: 'rr',
    dateCreated: new Date('2022-11-20T19:12:22'),
    visits: 54
  });

  urls.push({
    url: 'http://wici.com',
    shortCode: 'wici',
    dateCreated: new Date('2021-12-20T19:02:33'),
    visits: 59
  });

}

module.exports = {
  urls,
  seedData
};