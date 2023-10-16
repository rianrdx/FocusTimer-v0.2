import state from "./state.js";
import * as timer from "./timer.js";

export function play() {
  if (state.isRuning === false) {
    state.isRuning = true;

    timer.countDown();
  } else {
    return;
  }
}

export function stop() {
  if (state.isRuning === true) {
    state.isRuning = false;
  } else {
    return;
  }
}

export function addFiveMinutes() {
  timer.addFiveMinutes();
}

export function removeFiveMinutes() {
  timer.removeFiveMinutes();
}
