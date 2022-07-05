export function addToCart(item) {
  const cart = getCart();
  const cartItem = cart.find(
    (element) => element.id == item.id && element.color == item.color
  );

  if (cartItem) cartItem.quantity += item.quantity;
  else cart.push(item);

  updateCart(cart);
}

export function removeFromCart(id, color) {
  const cart = getCart();
  const newCart = cart.filter(
    (element) => !(element.id == id && element.color == color
  ));
  updateCart(newCart);
}

export function clearCart() {
  updateCart();
}

export function updateCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function updateQuantity(id, quantity, color) {
  const cart = getCart();
  const cartItem = cart.find(
    (element) => element.id == id && element.color == color
  );

  cartItem.quantity = quantity;
  updateCart(cart);
}

/**
 * @returns {Array}
 */
export function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}
