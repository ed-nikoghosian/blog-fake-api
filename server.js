const jsonServer = require('json-server');
const fs = require('fs');
const db = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json')));
const router = jsonServer.router(db);
const server = jsonServer.create();

const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(
  jsonServer.rewriter({
    '/api/*': '/$1'
  })
);

server.use(router);

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log('JSON Server is running on port', port);
});

module.exports = server;
