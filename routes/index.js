const routes = require('express').Router();
const htmlRoutes = require('./htmlRoutes');

routes.use('/',htmlRoutes);

module.exports = routes;