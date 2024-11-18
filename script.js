function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email && password) {
        showPage('welcome-page');
    } else {
        alert('Please enter both email and password.');
    }
}

function logout() {
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    showPage('login-page');
}

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
}

function saveRecipe() {
    alert('Recipe saved!');
    showPage('welcome-page');
}

function searchRecipe() {
    alert('Searching for recipes...');
}

function sendInvite() {
    const email = document.getElementById('invite-email').value;
    if (email) {
        alert(`Invitation sent to ${email}`);
    } else {
        alert('Please enter an email address.');
    }
}

