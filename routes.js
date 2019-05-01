// define routes to visit diff pages in web application
const routes = require('next-routes')();
routes
  .add('/home','/')
  .add('/rents/new', '/rents/new')
  .add('/rents/:managerAddress', '/rents/show')
  .add('/rents/:managerAddress/requests', '/rents/requests/index');

module.exports = routes;
