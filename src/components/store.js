  
import { BehaviorSubject } from "rxjs";

export const cart$ = new BehaviorSubject(
  JSON.parse(window.localStorage.getItem("cart") || "[]")
);

export function updateCart(newCart) {
  if (!newCart) {
    window.localStorage.removeItem("cart");
  } else {
    window.localStorage.setItem("cart", JSON.stringify(newCart));
  }

  cart$.next(newCart);
}