let querString = location.search;
let querStringObj = new URLSearchParams(querString);
let idReceta = querStringObj.get("id");
console.log(idReceta);

let url = `https://dummyjson.com/recipes/${idReceta}`;
fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);

    let characterNameElement = document.querySelector(".name-receta-detalle");
    let characterImageElement = document.querySelector(".img-receta-detalle");
    let characterPreparationElement = document.querySelector(".preparation");
    let characterCookTimeElement = document.querySelector(".cook-time");

    characterNameElement.textContent = data.name;
    characterImageElement.src = data.image;
    characterPreparationElement.innerHTML = `<b>Preparación:</b> ${data.instructions}`;
    characterCookTimeElement.innerHTML = `<b>Tiempo de preparación:</b> ${data.cookTimeMinutes}`;

    let categorias = data.tags;
    let categoriasElement = document.querySelector(".categorias");

    let categoriasHTML = "Categorias: ";
    for (let i = 0; i < categorias.length; i++) {
      categoriasHTML += `<a href="category.html?tag=${categorias[i]}">${categorias[i]}</a> `;
    }
    categoriasElement.innerHTML = categoriasHTML;
  })
  .catch(function (error) {
    console.log(error);
  });
