class HouseHold {
  constructor() {
    this.housemate = [];
  }

  addTenent(name) {
    this.housemate.push(name);
    return;
  }

  removeTenant(name) {
    if (this.housemate.length === 1 && this.housemate[0] === name) {
      this.housemate = [];
      return "SUCCESS";
    }
    this.housemate.splice(this.housemate.indexOf(name), 1);
    return !this.housemate.indexOf(name) ? "SUCCESS" : "FAILURE";
  }

  processCmd(cmd) {
    const parameters = cmd.split(" ");
    const operation = parameters[0];
    parameters.shift();
    const args = parameters;
    switch (operation) {
      case "MOVE_IN":
        if (args.length !== 1) return "FAILURE: <SYNTAX ERROR>";
        if (this.housemate.length < 3) {
          this.addTenent(args[0]);
          return "SUCCESS";
        } else {
          return "HOUSEFULL";
        }
      case "MOVE_OUT":
        if (args.length !== 1) return "FAILURE: <SYNTAX ERROR>";
        if (this.housemate.length && this.housemate.indexOf(args[0]) >= 0) {
          this.removeTenant(args[0]);
          console.log(this.housemate);
          return "SUCCESS";
        } else {
          return "MEMBER_NOT_FOUND";
        }
    }
  }
}

module.exports = HouseHold;
