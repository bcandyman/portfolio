const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

// Routes
require('./routes/htmlRoutes')(app);

// Starting the server, syncing our models ------------------------------------/
app.listen(PORT, () => {
  console.log('==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT);
});

module.exports = app;
