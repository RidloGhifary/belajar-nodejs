const http = require("node:http");
const { readFile, writeFile } = require("fs").promises;

const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

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

const getText = async () => {
  try {
    const first = await readFile("./content/text.txt", "utf8");
    const second = await readFile("./content/text2.txt", "utf8");
    await writeFile(
      "./content/writeFromIndex.txt",
      `Hello these text is from index.js :\n1. ${first}\n2. ${second}\n\n`,
      { flag: "a" }
    );
    console.log(first, second);
  } catch (err) {
    console.log(err);
  }
};

getText();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, result) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(result);
//       }
//     });
//   });
// };

// getText("./content/text.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
