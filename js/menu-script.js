function createCocktailGallery(cocktails) {
  const gallery = document.getElementById("cocktailGallery");
  cocktails.forEach((cocktail, index) => {
    const cocktailDiv = document.createElement("div");
    cocktailDiv.className = "cocktail-item";
    cocktailDiv.innerHTML = `
          <img src="img/${cocktail.image}" alt="${cocktail.name}">
          <h2>${cocktail.name}</h2>
          <p>${cocktail.description}</p>
      `;
    // Add click event to redirect to cocktail-template.html with cocktail index in URL
    cocktailDiv.addEventListener("click", () => {
      window.location.href = `cocktail-template.html?index=${index}`;
    });
    gallery.appendChild(cocktailDiv);
  });
}

function loadCocktails() {
  fetch("data/cocktails.json")
    .then((response) => response.json())
    .then((data) => {
      createCocktailGallery(data);
    })
    .catch((error) => console.error("Error loading cocktail data:", error));
}

document.addEventListener("DOMContentLoaded", loadCocktails);
