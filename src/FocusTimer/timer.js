import state from "./state.js";
import * as el from "./elements.js";
import { stop } from "./actions.js";

export function countDown() {
  if (!state.isRuning) {
    return;
  }

  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);

  seconds--;

  if (seconds < 0) {
    seconds = 59;
    minutes--;
  }
  if (minutes < 0) {
    stop();
    updateDisplay();
    return;
  }

  updateDisplay(minutes, seconds);

  setTimeout(() => countDown(), 1000);
}

export function addFiveMinutes() {
  let minutes = Number(el.minutes.textContent) + 5;
  let seconds = Number(el.seconds.textContent);
  updateDisplay(minutes, seconds);
}

export function removeFiveMinutes() {
  let minutes = Number(el.minutes.textContent) - 5;
  let seconds = Number(el.seconds.textContent);
  updateDisplay(minutes, seconds);
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes;
  seconds = seconds ?? state.seconds;

  el.minutes.textContent = String(minutes).padStart(2, "0");
  el.seconds.textContent = String(seconds).padStart(2, "0");
}
