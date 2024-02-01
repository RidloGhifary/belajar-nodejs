const os = require("os");
const path = require("path");

const filePath = path.join("/content", "text.txt");
// console.log(filePath);

const basename = path.basename(filePath);
// console.log(basename);

const absolute = path.resolve(__dirname, "content", "text.text");
// console.log(absolute);
// console.log(path.resolve());

const {
  readFileSync,
  writeFileSync,
  readFile,
  writeFile,
  read,
} = require("fs");
// console.log(readFileSync("./content/first.js", "utf-8"));

// writeFileSync("./content/writeFromApp.txt", "Hello this is from app.js ke-2");
readFile("./content/text.txt", "utf8", (err, result) => {
  if (err) console.log(err);

  const first = result;
  readFile("./content/text2.txt", "utf8", (err, result) => {
    if (err) console.log(err);
    const second = result;

    writeFile(
      "./content/writeFromApp.txt",
      `This is from App.js\n1.${first}\n2.${second}`,
      (err, result) => {
        if (err) console.log(err);
        console.log(result);
      }
    );
  });
});
