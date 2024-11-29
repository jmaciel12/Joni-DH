let querString = location.search;
let querStringObj = new URLSearchParams(querString);
let selectedTag = querStringObj.get("tag");
console.log(selectedTag);

if (selectedTag) {
  document.querySelector(".title-categorias").textContent = selectedTag;

  let url = `https://dummyjson.com/recipes/tag/${selectedTag}`;

  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data.recipes);

      let arrayDeRecetas = data.recipes;

      let seccion = document.querySelector(".container-products");
      let allRecipesHTML = "";

      for (let i = 0; i < arrayDeRecetas.length; i++) {
        allRecipesHTML += `
          <article class="product-card">
            <div class="product-details">
              <img src="${arrayDeRecetas[i].image}" alt="${arrayDeRecetas[i].name}">
              <p class="receta-name">${arrayDeRecetas[i].name}</p>
              <p>Dificultad: ${arrayDeRecetas[i].difficulty}</p>
            </div>
            <div class="product-actions">
              <a href="receta.html?id=${arrayDeRecetas[i].id}">Detalle</a>
            </div>
          </article>`;
      }

      seccion.innerHTML = allRecipesHTML;
      const articles = document.querySelectorAll(".product-card");

      for (let i = 0; i < articles.length; i++) {
        const article = articles[i];
        article.addEventListener("mouseover", function () {
          article.style.transform = "scale(1.1)";
        });
        article.addEventListener("mouseout", function () {
          article.style.transform = "scale(1)";
        });
      }
    })
    .catch(function (e) {
      console.log("Error:", e);
    });
} 
