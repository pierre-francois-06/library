import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);
export class Timer {
    duration = 0;
    remaining = 0;
    intervalId = null;
    running = false;
    paused = false;
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
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        this.running = false;
        this.paused = false;
    }
    getState(format = "mm:ss") {
        return {
            timeLeft: dayjs.duration(this.remaining, "seconds").format(format),
            isRunning: this.running,
            isPaused: this.paused,
            isFinished: !this.running && this.remaining === 0,
        };
    }
}
