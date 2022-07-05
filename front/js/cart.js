import { getCart, removeFromCart, updateQuantity } from "./cartManager.js";

/**
 * Fait le rendu d'un produit avec ses données
 * @returns
 */
function createItem(element) {
  const item = document.createElement("article");
  item.setAttribute("class", "cart__item");
  item.setAttribute("data-id", element.id);
  item.setAttribute("data-color", element.color);

  const div = document.createElement("div");
  div.className = "cart__item__img";
  item.appendChild(div);

  const img = document.createElement("img");
  img.src = element.imageUrl;
  img.alt = element.altTxt;
  div.appendChild(img);

  const content = document.createElement("div");
  content.className = "cart__item__content";
  item.appendChild(content);

  const description = document.createElement("div");
  description.className = "cart__item__content__description";
  content.appendChild(description);

  const name = document.createElement("h2");
  name.appendChild(document.createTextNode(element.name));
  const color = document.createElement("p");
  color.appendChild(document.createTextNode(element.color));
  const price = document.createElement("p");
  price.appendChild(document.createTextNode(element.price + " €"));
  description.appendChild(name);
  description.appendChild(color);
  description.appendChild(price);

  const settings = document.createElement("div");
  settings.className = "cart__item__content__settings";
  content.appendChild(settings);

  const quantity = document.createElement("div");
  quantity.className = "cart__item__content__settings__quantity";
  settings.appendChild(quantity);

  const quantityTxt = document.createElement("p");
  quantityTxt.appendChild(document.createTextNode("Qté : "));
  const input = document.createElement("input");
  input.setAttribute("type", "number");
  input.setAttribute("class", "itemQuantity");
  input.setAttribute("name", "itemQuantity");
  input.setAttribute("min", "1");
  input.setAttribute("max", "100");
  input.setAttribute("value", element.quantity);
  input.addEventListener("click", (ev) => {
    updateQuantity(element.id, +ev.target.value, element.color);
    render();
  });

  quantity.appendChild(quantityTxt);
  quantity.appendChild(input);
  
  const divDelete = document.createElement("div");
  divDelete.className = "cart__item__content__settings__delete";
  const divDeletetxt = document.createElement("p");
  divDeletetxt.className = "deleteItem";
  divDeletetxt.appendChild(document.createTextNode("Supprimer"));
  divDeletetxt.addEventListener("click", (ev) => {
    removeFromCart(element.id, element.color);
    render();
  });
  divDelete.appendChild(divDeletetxt);
  settings.appendChild(divDelete);

  return item;
}

function render() {
  const items = document.getElementById("cart__items");
  const elements = getCart();
  items.innerHTML = "";
  for (const element of elements) {
    items.appendChild(createItem(element));
  }

  const totalQuantity = document.getElementById("totalQuantity");
  const totalQuantityTxt = elements.reduce((previous, current) => previous + current.quantity, 0);
  totalQuantity.textContent = totalQuantityTxt;

  const totalPrice = document.getElementById("totalPrice");
  let totalPriceTxt = 0;
  for (const element of elements) {
    totalPriceTxt += element.price*element.quantity;
  }
  totalPrice.textContent = totalPriceTxt;
}

function main() {
  render();
}

main();
