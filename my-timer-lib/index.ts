import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

export interface TimerState {
  timeLeft: string;
  isRunning: boolean;
  isPaused: boolean;
  isFinished: boolean;
}

export class Timer {
  private duration: number = 0;
  private remaining: number = 0;
  private intervalId: ReturnType<typeof setInterval> | null = null;
  private running: boolean = false;
  private paused: boolean = false;
  private finished: boolean = false;

  start(seconds: number): void {
    this.stop();
    this.duration = seconds;
    this.remaining = seconds;
    this.running = true;
    this.paused = false;
    this.finished = false;

    this.intervalId = setInterval(() => {
      if (!this.paused) {
        this.remaining--;
        if (this.remaining <= 0) {
          this.finished = true;
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

  stop(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.running = false;
    this.paused = false;
  }

  getState(format: "mm:ss" | "HH:mm:ss" | "HH:mm" = "mm:ss"): TimerState {
    return {
      timeLeft: dayjs.duration(this.remaining, "seconds").format(format),
      isRunning: this.running,
      isPaused: this.paused,
      isFinished: this.finished,
    };
  }
}
