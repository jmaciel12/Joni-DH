
let querString = location.search;
let querStringObj = new URLSearchParams(querString);
let busqueda = querStringObj.get("search");

if (busqueda === "") {
  alert("Por favor ingrese un término de búsqueda.");
} else if (busqueda.length < 3) {
  alert("El término de búsqueda debe tener al menos 3 caracteres.");
} else {
  let url = `https://dummyjson.com/recipes/search?q=${busqueda}`;

  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data.recipes);

      let arrayDeRecetas = data.recipes;

      let seccion = document.querySelector(".container-products");

      if (arrayDeRecetas.length === 0) {
        seccion.innerHTML = "No se encontraron resultados.";
      } else {
        let allRecipesHTML = "";

        for (let i = 0; i < arrayDeRecetas.length; i++) {
          allRecipesHTML += `
          <article class="product-card">
            <div class="product-details">
              <img src="${arrayDeRecetas[i].image}" alt="${arrayDeRecetas[i].name}">
              <p class="receta-name">${arrayDeRecetas[i].name}</p>
              <p>${arrayDeRecetas[i].description}</p>
            </div>
            <div class="product-actions">
              <a href="detalle.html?id=${arrayDeRecetas[i].id}">Ver detalles</a>
            </div>
          </article>`;
        }

        seccion.innerHTML = allRecipesHTML;
      }
    })
    .catch(function (e) {
      console.log("Error:", e);
    });
}

