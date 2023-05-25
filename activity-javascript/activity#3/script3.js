let recipes = []; //serves as book for all process

document.getElementById("recipe-form").addEventListener("submit", function (event) {
    event.preventDefault();
    saveRecipe();
});

function addIngredient() { //populate ingre output
    let ingredient = document.getElementById("ingredient-input").value;
    if (ingredient) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(ingredient));
        document.getElementById("ingredients-list").appendChild(li);
        document.getElementById("ingredient-input").value = "";
    }
}

function addInstruction() { //populate intruc output
    let instruction = document.getElementById("instruction-input").value;
    if (instruction) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(instruction));
        document.getElementById("instructions-list").appendChild(li);
        document.getElementById("instruction-input").value = "";
    }
}

function saveRecipe() {
    let recipeName = document.getElementById("recipe-name").value;
    if (recipeName) {
        let ingredientsList = document.getElementById("ingredients-list");
        let ingredients = [];
        for (let i = 0; i < ingredientsList.children.length; i++) { //push ingre
            ingredients.push(ingredientsList.children[i].textContent);
        }
        let instructionsList = document.getElementById("instructions-list");
        let instructions = [];
        for (let i = 0; i < instructionsList.children.length; i++) { //push instruc
            instructions.push(instructionsList.children[i].textContent);
        }
        let recipe = {
            name: recipeName,
            ingredients: ingredients,
            instructions: instructions
        };
        recipes.push(recipe); //populate recipe
        displayRecipes();
        resetForm();
    }
}

function displayRecipes() { //show recipe
    let recipesList = document.getElementById("recipes-list");
    recipesList.innerHTML = "";
    for (let i = 0; i < recipes.length; i++) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(recipes[i].name));
        li.addEventListener("click", function () {
            displayRecipeDetails(i);
        });
        recipesList.appendChild(li);
    }
}

function displayRecipeDetails(index) { //output recipe details
    let recipeDetails = "<h2>" + recipes[index].name + "</h2>";
    recipeDetails += "<h3>Ingredients:</h3><ul>";
    for (let i = 0; i < recipes[index].ingredients.length; i++) {
        recipeDetails += "<li>" + recipes[index].ingredients[i] + "</li>";
    }
    recipeDetails += "</ul>";
    recipeDetails += "<h3>Instructions:</h3><ol>";
    for (let i = 0; i < recipes[index].instructions.length; i++) {
        recipeDetails += "<li>" + recipes[index].instructions[i] + "</li>";
    }
    recipeDetails += "</ol>";
    document.getElementById("recipe-details").innerHTML = recipeDetails;
}

function resetForm() { //reset input
    document.getElementById("recipe-form").reset();
    document.getElementById("ingredients-list").innerHTML = "";
    document.getElementById("instructions-list").innerHTML = "";
}