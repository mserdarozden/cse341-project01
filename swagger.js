const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Users API',
    description: 'Users API'
  },
  host: 'localhost:3000',
  schemes: ['https', 'http']
};

const outputFile = './swagger.json';
const routes = ['./routes/index.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);