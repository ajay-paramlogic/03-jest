const { promises: fs } = require("fs");

async function readFile(filePath) {
  try {
    const data = await fs.readFile(filePath, "utf8");
    return data;
  } catch (err) {
    throw new Error(`Failed to read file: ${filePath}`);
  }
}

async function writeFile(filePath, data) {
  try {
    await fs.writeFile(filePath, data, "utf8");
  } catch (err) {
    throw new Error(`Failed to write file: ${filePath}`);
  }
}

function timerGame(callback) {
  console.log("Ready....go!");
  setTimeout(() => {
    console.log("Time's up -- stop!");
    callback && callback();
  }, 1000);
}

module.exports = { readFile, writeFile, timerGame };
