const http = require("http");

const hostname = "127.0.0.1";
const port = 8000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World\n");
  } else if (req.url === "/about") {
    res.setHeader("Content-Type", "text/plain");
    res.end("This is About Page");
  } else {
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 404;
    res.end(`<h1>Oops... Not Found</h1>\n<a href="/">home</a>`);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
