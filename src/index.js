function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "e5bt54135b02f36048218oa4bf5cb2d1";
  let prompt = `User instructions: Generate a recipe about ${instructionsInput.value}`;
  let context =
    "You are an AI chef who likes to cook simple yet deliocous meals and has a knowledge of a wide range of recipes that are easy to prepare. Provide a recipe using the user instructions. Provide the recipe in the HTML format using </ br> between each line. Please do not display html before displaying the recipe. Please do not include any additinal comments.";

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="blink">⏳ Generating a recipe with ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
