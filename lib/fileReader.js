const fs = require("fs");

class FileReader {
  constructor(filename) {
    this.file = fs.createReadStream(filename);
    this.data = "";
    this.file.setEncoding("UTF8");
  }

  checkFileStatus() {
    return new Promise((resolve, reject) => {
      this.file.on("open", () => {
        resolve(true);
      });
    });
  }

  getCommands() {
    return new Promise((resolve, reject) => {
      this.file.on("data", (chunk) => {
        this.data += chunk;
      });

      this.file.on("end", (res) => {
        resolve(this.data);
      });

      this.file.on("error", () => reject(false));
    });
  }
}

module.exports = FileReader;
