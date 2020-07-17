const routes = require('express').Router();
const apiRoutes = require('./apiRoutes');
const htmlRoutes = require('./htmlRoutes');

routes.use('/api', apiRoutes);
routes.use(htmlRoutes);

module.exports = routes;
