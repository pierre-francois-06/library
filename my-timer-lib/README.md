# 🕒 my-timer-lib – einfache Timer-Logik für JavaScript/TypeScript-Projekte

my-timer-lib ist eine minimalistische Timer-Bibliothek, mit der sich Zeitfunktionen wie start, pause, resume und reset ganz einfach steuern lassen. Ideal für React- oder Vite-Projekte, bei denen du z. B. die verbleibende Zeit in der UI anzeigen möchtest – ganz ohne externe Abhängigkeiten.

## 🔧 Hauptfunktionen

start(seconds: number): Startet den Timer mit gewünschter Zeit

pause(): Pausiert den Timer

resume(): Setzt einen pausierten Timer fort

reset(): Setzt den Timer auf Anfang zurück

status(): Gibt ein Objekt mit aktuellem Status zurück (timeLeft, running, paused, ...)
