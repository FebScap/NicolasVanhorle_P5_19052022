export function addToCart(item) {
  localStorage.setItem("cart", getCart(cart) + item);
}

export function removeFromCart(id) {
  localStorage.removeItem(id);
}

export function clearCart() {
  localStorage.clear();
}

export function updateCart() {}

export function getCart(id) {
  return localStorage.getItem(id);
}
