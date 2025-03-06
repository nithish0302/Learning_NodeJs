const fs = require("fs").promises;

// fs.readFile("./data.txt", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data.toString());
// });

// console.log("------------->");
// const path = require("path");

// fs.appendFile(
//   path.join(__dirname, "test.txt"),
//   "    This is from the js file writing system and none",
//   (err) => {
//     if (err) throw err;
//     console.log("Writing Complete");
//   }
// );
// console.log("------------->");
// process.on("uncaughtException", (err) => {
//   console.error(`error ${err}`);
//   process.exit(1);
// });

//USING THE ASYN AND AWAIT

const path = require("path");
async function readandwrite() {
  try {
    const data = await fs.readFile("./data.txt", "utf8");
    console.log(data);

    await fs.appendFile(
      path.join(__dirname, "text.txt"),
      " This message from the async and await function"
    );

    console.log("Writing complete");
  } catch (err) {
    console.error(`Error ${err}`);
    process.exit(1);
  }
}

readandwrite();
