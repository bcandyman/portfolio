const htmlRoutes = require('express').Router();
const path = require('path');

// Load index page
htmlRoutes.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

// Load portfolio page
htmlRoutes.get('/portfolio', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/portfolio.html'));
});

// Load contact page
htmlRoutes.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/contact.html'));
});

// Render 404 page for any unmatched routes
htmlRoutes.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/404.html'));
});

module.exports = htmlRoutes;
