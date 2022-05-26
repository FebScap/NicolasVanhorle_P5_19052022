let headersList = {
    "Accept": "application/json"
   }
   
   fetch("http://localhost:3000/api/products/", { 
     method: "GET",
     headers: headersList
   }).then(function(response) {
     return response.json();
   }).then(function(elements) {

     for (let i in elements) {
        items.appendChild(createItem(i));
      }

      function createItem(i) {
        const number = parseInt(i) + 1;
        const item = document.createElement("a");
        item.href = `./product.html?id=${elements[i]._id}`;
        const article = document.createElement("article");
    
        const img = document.createElement("img");
        img.src = elements[i].imageUrl;
        img.alt = elements[i].altTxt;

        const h3 = document.createElement("h3");
        const name = document.createTextNode(elements[i].name);
        h3.appendChild(name);
    
        const p = document.createElement("p");
        const text = document.createTextNode(elements[i].description);
        p.appendChild(text);
    
        item.appendChild(article);
        article.appendChild(img);
        article.appendChild(h3);
        article.appendChild(p);
    
        return item;
    }
   })


