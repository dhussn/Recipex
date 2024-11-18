// Function to show a specific page
function showPage(pageId) {
    const pages = document.querySelectorAll(".page");
    pages.forEach(page => page.style.display = "none");
    document.getElementById(pageId).style.display = "block";
}

// Login Function
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email && password) {
        showPage("welcome-page");
    } else {
        alert("Please enter your email and password.");
    }
}

// Logout Function
function logout() {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    showPage("login-page");
}

// Navigation Functions
function showUploadPage() {
    showPage("upload-recipe-page");
}

function showRetrievePage() {
    showPage("retrieve-recipe-page");
}

function showInvitePage() {
    showPage("invite-page");
}

function goBack() {
    showPage("welcome-page");
}

// Placeholder functions
function saveRecipe() {
    alert("Recipe saved!");
}

function searchRecipe() {
    alert("Search completed!");
}

function sendInvite() {
    alert("Invitation sent!");
}
