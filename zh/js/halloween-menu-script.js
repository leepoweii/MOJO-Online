function createCocktailGallery(cocktails) {
  const gallery = document.getElementById("cocktailGallery");
  cocktails.forEach((cocktail) => {
    const cocktailDiv = document.createElement("div");
    cocktailDiv.className = "cocktail-item";
    cocktailDiv.innerHTML = `
          <img src="img/${cocktail.image}" alt="${cocktail.name}" onerror="this.src='img/underConstruction.jpg'">
          <h2>${cocktail.name}</h2>
          <p>${cocktail.description}</p>
      `;
    gallery.appendChild(cocktailDiv);
  });
}

function createFoodGallery(foods) {
  const gallery = document.getElementById("foodGallery");
  foods.forEach((food) => {
    const foodDiv = document.createElement("div");
    foodDiv.className = "cocktail-item"; // Using the same class to match the cocktail design
    foodDiv.innerHTML = `
          <img src="img/${food.image}" alt="${food.name}" onerror="this.src='img/underConstruction.jpg'">
          <h2>${food.name}</h2>
          <p>${food.description}</p>
      `;
    gallery.appendChild(foodDiv);
  });
}

function loadHalloweenMenu() {
  // Fetch the cocktail data
  fetch("data/halloween-cocktails.json")
    .then((response) => response.json())
    .then((data) => {
      createCocktailGallery(data);
    })
    .catch((error) => console.error("Error loading cocktail data:", error));

  // Fetch the food data
  fetch("data/halloween-food.json")
    .then((response) => response.json())
    .then((data) => {
      createFoodGallery(data);
    })
    .catch((error) => console.error("Error loading food data:", error));
}

document.addEventListener("DOMContentLoaded", loadHalloweenMenu);
