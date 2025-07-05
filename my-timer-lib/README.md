# ⏱️ my-timer-lib

A lightweight, dependency-free timer library for JavaScript and TypeScript projects. Perfect for use in React, Vite, or Vanilla apps – with precise control over timing behavior.

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
