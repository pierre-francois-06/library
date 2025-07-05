export class Timer {
  constructor(id) {
    this.id = id;
    this.type = null;
    this.time = null;
  }

  start(time) {
    this.time = time;

    const clock = () => {
      console.log(this.time);
      this.time--;
    };

    setInterval(() => clock(), 1000);
  }
}
