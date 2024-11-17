// Function to handle login
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  if (email && password) {
    document.getElementById("login-page").style.display = "none";
    document.getElementById("welcome-page").style.display = "block";
  } else {
    alert("Please enter both email and password");
  }
}

// Function to logout
function logout() {
  document.getElementById("welcome-page").style.display = "none";
  document.getElementById("login-page").style.display = "block";
}

// Function to show the Upload Recipe page
function showUploadPage() {
  document.getElementById("welcome-page").style.display = "none";
  document.getElementById("upload-recipe-page").style.display = "block";
}

// Function to show the Retrieve Recipe page
function showRetrievePage() {
  document.getElementById("welcome-page").style.display = "none";
  document.getElementById("retrieve-recipe-page").style.display = "block";
}

// Function to show the Invite Friend page
function showInvitePage() {
  document.getElementById("welcome-page").style.display = "none";
  document.getElementById("invite-page").style.display = "block";
}

// Function to handle saving a recipe
function saveRecipe() {
  const name = document.getElementById("recipe-name").value;
  const category = document.getElementById("recipe-category").value;
  const note = document.getElementById("recipe-note").value;
  const photo = document.getElementById("recipe-photo").files[0];
  
  if (name && category) {
    alert("Recipe Saved!");
    goBack();
  } else {
    alert("Please fill out the recipe name and category");
  }
}

// Function to handle searching for a recipe
function searchRecipe() {
  const name = document.getElementById("search-name").value;
  const category = document.getElementById("search-category").value;
  // Add logic to search for recipes
  alert("Searching...");
}

// Function to go back to the previous page
function goBack() {
  document.getElementById("upload-recipe-page").style.display = "none";
  document.getElementById("retrieve-recipe-page").style.display = "none";
  document.getElementById("invite-page").style.display = "none";
  document.getElementById("welcome-page").style.display = "block";
}
