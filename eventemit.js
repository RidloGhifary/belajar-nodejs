// const EventEmitter = require("events");

// const customEvent = new EventEmitter();

// customEvent.on("personal", (name, id) => {
//   console.log(`Connected to ${name} with id:${id}`);
// });

// customEvent.emit("personal", "Ridlo", 18);

const { createReadStream } = require("fs");

const stream = createReadStream("./content/bigFile.txt", {
  highWaterMark: 90000,
  encoding: "utf8",
});

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => console.log(err));
