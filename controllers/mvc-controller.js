// Define controller
function setup(app, data) {
  app.get('/', function(req, res) {
    let visitors = 0;
    console.log('Calculating...');
    for (let url of data.urls) {
      console.log(url);
      visitors += url.visits;
    }

    let model = { urls: data.urls, visitors };
    res.render('home', model);
  });

  app.get('/add-url', function(req, res) {
    let model = { url: 'new url', shortURL: 'short URL' };
    res.render('add-url', model);
  });

  app.post('/add-url', function(req, res) {
    res.redirect('/');
  });

  app.get('/urls', function(req, res) {
    let model = { urls: data.urls };
    res.render('urls', model);
  });
}

module.exports = {
  setup
}