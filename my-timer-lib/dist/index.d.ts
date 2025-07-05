export interface TimerState {
    timeLeft: string;
    isRunning: boolean;
    isPaused: boolean;
    isFinished: boolean;
}
export declare class Timer {
    private duration;
    private remaining;
    private intervalId;
    private running;
    private paused;
    private finished;
    start(seconds: number): void;
    pause(): void;
    resume(): void;
    reset(): void;
    stop(): void;
    getState(format?: "mm:ss" | "HH:mm:ss" | "HH:mm"): TimerState;
}
