let url = "https://dummyjson.com/recipes/tags";

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (tags) {
    console.log(tags);

    let seccion = document.querySelector(".container-tags");
    let allTagsHTML = "";

    for (let i = 0; i < tags.length; i++) {
      allTagsHTML += `
        <article class="tag-card">
          <div class="tag-details">
            <h2 class="tag-name"><a href="category.html?tag=${tags[i]}">${tags[i]}</a></h2>
            <p>Descubre recetas relacionadas con esta categoría.</p>
          </div>
        </article>
      `;
    }

    seccion.innerHTML = allTagsHTML;

    let articleCategorias = document.querySelectorAll(".tag-card");
    for (let i = 0; i < articleCategorias.length; i++) {
      const article = articleCategorias[i];
      article.addEventListener("mouseover", function () {
        article.style.background = "#ADD8E6";
        article.style.transform = "scale(1.1)";
      });

      article.addEventListener("mouseout", function () {
        article.style.background = "";
        article.style.transform = "scale(1)";
      });
    }
  })
  .catch(function (e) {
    console.log("Error:", e);
  });
