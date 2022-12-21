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
}

module.exports = {
  setup
}