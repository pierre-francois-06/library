export class Timer {
  constructor(id) {
    this.id = id;
    this.type = null;
    this.time = null;
  }

  start(type) {
    this.type = type;
    console.log(`Timertype: ${this.type}`);
  }
}
