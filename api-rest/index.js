// Dependencies
const http = require('http');

// Server should respond to all requests
const server = http.createServer(function (req, res) {
  // Get URL and parse it
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`, {
    parseQueryString: true,
  });

  // Get the path
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');

  // Get the query string as an object
  const queryStringObject = {};
  for (const query of parsedUrl.searchParams) {
    queryStringObject[query[0]] = query[1];
  }

  // Get the HTTP Method
  const method = req.method.toLocaleLowerCase();

  // Send the response
  res.end('Hello World\n');

  // Log the request path
  console.log(
    `Request received on path: ${trimmedPath} with method: ${method} and with these query string parameters: ${queryStringObject}`
  );
});

// Start server, and have it listen on port
server.listen(3000, function () {
  console.log('Server is listening on port 3000');
});
