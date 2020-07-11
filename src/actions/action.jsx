import { INCREMENT, DECREMENT } from "./actionType";

export function decrement(payload) {
  return { type: DECREMENT, payload };
}

export function increment(payload) {
  return { type: INCREMENT, payload };
}
