export class Timer {
  constructor(id) {
    this.id = id;
    this.duration = 0;
    this.remaining = 0;
    this.intervalId = null;
    this.running = false;
  }

  start(seconds) {
    this.duration = seconds;
    this.remaining = seconds;
    this.running = true;

    this.intervalId = setInterval(() => {
      this.remaining--;

      if (this.remaining <= 0) {
        this.stop();
      }
    }, 1000);
  }

  timeLeft() {
    return this.remaining;
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.running = false;
  }
}
