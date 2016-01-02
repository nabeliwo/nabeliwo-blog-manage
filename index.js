const Hapi = require('hapi');
const MongoClient = require('mongodb').MongoClient;
const config = require('config');
const vision = require('vision');
const handlebars = require('handlebars');
const inert = require('inert');

const server = new Hapi.Server();


// Connect the server
server.connection({
  host: config.get('host'),
  port: normalizePort(process.env.PORT || '3000')
});

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}


// Connect the db
MongoClient.connect(config.get('db.url'), (err, db) => {
  if (err) {
    return console.dir(err);
  }

  const routings = [
    ...require('./app/api/users')(db),
    ...require('./app/api/posts')(db),
    ...require('./app/routes')()
  ];

  server.route(routings);
});


// template engine
server.register(vision, err => {
  if (err) {
    return console.dir(err);
  }

  server.views({
    engines: {
      html: handlebars
    },
    relativeTo: __dirname,
    path: './public'
  });
});


// serving static files and directories
server.register(inert, err => {
  if (err) {
    throw err;
  }
});


// Start the server
server.start(err => {
  if (err) {
    throw err;
  }

  console.log('Server running at:', server.info.uri);
});
