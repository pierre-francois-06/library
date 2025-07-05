import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

export class Timer {
  constructor() {
    this.duration = 0;
    this.remaining = 0;
    this.intervalId = null;
    this.running = false;
    this.paused = false;
  }

  start(seconds) {
    this.stop();
    this.duration = seconds;
    this.remaining = seconds;
    this.running = true;
    this.paused = false;

    this.intervalId = setInterval(() => {
      if (!this.paused) {
        this.remaining--;
        if (this.remaining <= 0) {
          this.stop();
        }
      }
    }, 1000);
  }

  pause() {
    if (this.running && !this.paused) {
      this.paused = true;
    }
  }

  resume() {
    if (this.running && this.paused) {
      this.paused = false;
    }
  }

  reset() {
    this.stop();
    this.start(this.duration);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.running = false;
    this.paused = false;
  }

  getState() {
    return {
      timeLeft: dayjs.duration(this.remaining, "seconds").format("mm:ss"),
      isRunning: this.running,
      idPaused: this.paused,
      isFinished: !this.running && this.remaining === 0,
    };
  }
}
