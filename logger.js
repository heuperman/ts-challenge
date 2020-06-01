class Logger {
  constructor(id) {
    if (typeof id === "number") {
      loggerId = id.toString();
    } else {
      loggerId = id;
    }
  }

  loggerId;
  logs = [];

  addLog(log) {
    this.logs.push(log.message);
  }

  printLogs() {
    let output = this.loggerId + ":" + this.logs.join("\n");
    console.info(output);
  }
}
