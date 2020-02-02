const path = require('path');

module.exports = (app) => {
  // Load index page
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/../views/index.html'));
  });

  // Load portfolio page
  app.get('/portfolio', (req, res) => {
    res.sendFile(path.join(__dirname, '/../views/portfolio.html'));
  });

  // Load contact page
  app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '/../views/contact.html'));
  });

  // Render 404 page for any unmatched routes
  app.get('*', (req, res) => {
    res.sendFile(path(__dirname, '/../404'));
  });
};
