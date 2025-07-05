# ⏱️ my-timer-lib

A lightweight, dependency-free timer library for JavaScript and TypeScript projects. Perfect for use in React, Vite, or Vanilla apps – with precise control over timing behavior.

---

## 📚 Table of Contents

- [Features](#-features)
- [Installation](#-installation)
- [Usage](#-usage)
- [API Reference](#-api-reference)
- [npm Package](#-direct-link-to-npm-package)

---

## 🚀 Features

- ✅ Simple `start`, `pause`, `resume`, and `reset` methods
- ⏱️ Live time tracking via `.status()`
- 🔁 Support for multiple independent timers
- 🔧 TypeScript and JavaScript compatible
- 🧪 Ideal for UI integration (e.g. countdowns)

---

## 📦 Installation

```bash
npm install my-timer-lib
```

---

## 🔧 Usage

```js
import { Timer } from "my-timer-lib";

const myTimer = new Timer();

// Start a 10-second countdown
myTimer.start(10);

// Access current time left
console.log(myTimer.status().timeLeft);

// Pause the timer
myTimer.pause();

// Resume it again
myTimer.resume();

// Reset to initial state
myTimer.reset();
```

```jsx
import React, { useEffect, useState } from "react";
import { Timer } from "my-timer-lib";

const myTimer = new Timer();

function App() {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(myTimer.status().timeLeft);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Time Left: {timeLeft}s</h1>
      <button onClick={() => myTimer.start(10)}>Start</button>
      <button onClick={() => myTimer.pause()}>Pause</button>
      <button onClick={() => myTimer.resume()}>Resume</button>
      <button onClick={() => myTimer.reset()}>Reset</button>
    </div>
  );
}
```

---

## 🧩 API Reference

### `Timer.start(seconds: number): void`

Starts a countdown timer in seconds.

### `Timer.pause(): void`

Pauses the timer.

### `Timer.resume(): void`

Resumes a paused timer.

### `Timer.reset(): void`

Resets the timer to its initial state.

### `Timer.getState(format: string): { timeLeft: number, isRunning: boolean, isPaused: boolean, isFinished: boolean }`

Returns the current state of the timer.

---

![npm version](https://img.shields.io/npm/v/my-timer-lib)
![License](https://img.shields.io/npm/l/my-timer-lib)

### 🔗 Direct Link to npm Package

📦 [View on npm](https://www.npmjs.com/package/my-timer-lib)
