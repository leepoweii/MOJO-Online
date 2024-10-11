// Sample cocktail data (should match the data in your JSON file)
const cocktails = [
  {
    name: "Pure Love K.K.",
    image: "imgs/cocktail1.jpg",
    flavorProfile: "Citrusy and Floral",
    storyBehind:
      "<p>Gugang Village in Kinmen is home to the picturesque Gugang Lake...</p>",
    description: "Marigold/ Jasmine Tea/ Honey",
  },
  // Add more cocktails...
];

// Function to get the query parameter (e.g., cocktail index) from the URL
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function displayCocktailDetails(cocktail) {
  // Set the cocktail title in both header and body
  document.getElementById("cocktailTitle").textContent = cocktail.name;

  // Set the cocktail image
  document.getElementById("cocktailImage").src = cocktail.image;
  document.getElementById("cocktailImage").alt = cocktail.name;

  // Set other cocktail details
  document.getElementById("flavorProfile").textContent = cocktail.flavorProfile;
  document.getElementById("storyBehind").innerHTML = cocktail.storyBehind;
  document.getElementById("description").textContent = cocktail.description;
}

function loadCocktailDetails() {
  const index = getQueryParam("index");

  // Fetch the cocktail data
  fetch("data/cocktails.json")
    .then((response) => response.json())
    .then((data) => {
      const cocktail = data[index];
      if (cocktail) {
        displayCocktailDetails(cocktail);
      } else {
        document.getElementById("cocktailTitle").textContent =
          "Cocktail Not Found";
      }
    })
    .catch((error) => console.error("Error loading cocktail data:", error));
}

document.addEventListener("DOMContentLoaded", loadCocktailDetails);
