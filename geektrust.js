const FileReader = require("./lib/fileReader");
const HouseHold = require("./lib/house");

const filename = process.argv[2];

async function readFile() {
  try {
    const fd = new FileReader(filename);
    await fd.checkFileStatus();
    const result = await fd.getCommands();
    const cmdArr = result.split("\n");
    return cmdArr;
  } catch (e) {
    console.error("something went wrong", e.message);
    return false;
  }
}

async function runCmds() {
  const cmds = await readFile();
  const house = new HouseHold();
  console.log(cmds);
  cmds.map((cmd) => {
    console.log(house.processCmd(cmd));
  });
}

runCmds();
