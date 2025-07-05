export class Timer {
  constructor(id) {
    this.id = id;
    this.type = null;
    this.time = null;
  }

  start(time) {
    this.time = time;

    setInterval(clock(), this.time);

    const clock = () => {
      this.time--;
    };

    console.log(this.time);
  }
}
