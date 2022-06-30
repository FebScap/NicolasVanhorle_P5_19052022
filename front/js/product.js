import { addToCart } from "./cartManager.js";

function getId() {
  const url = window.location.href.split("id=");
  return url[1];
}

async function getElement() {
  let headersList = {
    Accept: "application/json",
  };
  const response = await fetch(
    `http://localhost:3000/api/products/${getId()}`,
    {
      method: "GET",
      headers: headersList,
    }
  );
  return await response.json();
}

function writeElement() {
  getElement().then(function (data) {
    const button = document.getElementById("addToCart");
    button.addEventListener("click", () => sendItemToCart(data));

    document.getElementById("title").innerHTML = data.name;

    document.getElementById("item__img").src = data.imageUrl;
    document.getElementById("item__img").alt = data.altTxt;

    document.getElementById("name").innerHTML = data.name;
    document.getElementById("price").innerHTML = " " + data.price + " ";
    document.getElementById("description").innerHTML = data.description;

    for (let i in data.colors) {
      const color = document.createElement("option");
      color.value = data.colors[i];
      color.innerHTML = data.colors[i];
      document.getElementById("colors").appendChild(color);
    }
  });
}

function sendItemToCart(data) {
  addToCart({
    quantity: +document.getElementById("quantity").value,
    color: document.getElementById("colors").value,
    id: getId(),
    ...data,
  });
}

function main() {
  writeElement();
}

main();
