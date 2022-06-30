export function addToCart(item) {
  const cart = getCart();
  const cartItem = cart.find(
    (element) => element.id == item.id && element.color == item.color
  );

  if (cartItem) cartItem.quantity += item.quantity;
  else cart.push(item);

  updateCart(cart);
}

export function removeFromCart(id) {
  localStorage.removeItem(id);
}

export function clearCart() {
  updateCart();
}

export function updateCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

/**
 * @returns {Array}
 */
export function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}
