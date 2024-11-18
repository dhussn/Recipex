// Global variable to track the current page
let currentPage = "login";  // Options: login, welcome, upload, retrieve, invite

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    // Basic validation
    if (email && password) {
        currentPage = "welcome";
        changePage();
    } else {
        alert("Please enter both email and password.");
    }
}

function showUploadPage() {
    currentPage = "upload";
    changePage();
}

function showRetrievePage() {
    currentPage = "retrieve";
    changePage();
}

function showInvitePage() {
    currentPage = "invite";
    changePage();
}

function logout() {
    currentPage = "login";
    changePage();
}

function saveRecipe() {
    // Save the recipe logic
    alert("Recipe saved!");
    currentPage = "welcome";
    changePage();
}

function searchRecipe() {
    // Search recipe logic
    alert("Searching for recipe...");
}

function sendInvite() {
    // Send invite logic
    alert("Invite sent!");
    currentPage = "welcome";
    changePage();
}

function goBack() {
    if (currentPage === "upload" || currentPage === "retrieve" || currentPage === "invite") {
        currentPage = "welcome";
    } else if (currentPage === "welcome") {
        currentPage = "login";
    }
    changePage();
}

function changePage() {
    // Hide all pages
    document.querySelectorAll(".page").forEach(page => {
        page.style.display = "none";
    });
    
    // Show the current page
    document.getElementById(`${currentPage}-page`).style.display = "block";
}

