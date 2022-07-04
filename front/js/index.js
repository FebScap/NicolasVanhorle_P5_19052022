let headersList = {
  Accept: "application/json",
};

/**
 * Recupere la liste de tout les produits
 * @returns
 */
async function getProducts() {
  const response = await fetch("http://localhost:3000/api/products/", {
    method: "GET",
    headers: headersList,
  });
  return response.json();
}

/**
 * Fait le rendu d'un produit avec ses données
 * @returns
 */
function createItem(element) {
  const item = document.createElement("a");
  item.href = `./product.html?id=${element._id}`;

  const article = document.createElement("article");
  item.appendChild(article);

  const img = document.createElement("img");
  img.src = element.imageUrl;
  img.alt = element.altTxt;
  article.appendChild(img);

  const h3 = document.createElement("h3");
  const name = document.createTextNode(element.name);
  h3.appendChild(name);
  article.appendChild(h3);

  const p = document.createElement("p");
  const text = document.createTextNode(element.description);
  p.appendChild(text);
  article.appendChild(p);

  return item;
}

async function main() {
  const elements = await getProducts();
  for (const element of elements) {
    items.appendChild(createItem(element));
  }
}

main();
