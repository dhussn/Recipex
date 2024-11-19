document.addEventListener('DOMContentLoaded', () => {
  const screen1 = document.getElementById('screen1');
  const screen2 = document.getElementById('screen2');
  const uploadScreen = document.getElementById('upload-recipe-screen');
  const retrieveScreen = document.getElementById('retrieve-recipe-screen');
  const inviteScreen = document.getElementById('invite-screen');

  const loginBtn = document.getElementById('login-btn');
  const logoutBtn = document.getElementById('logout-btn');
  const uploadRecipeBtn = document.getElementById('upload-recipe-btn');
  const retrieveRecipeBtn = document.getElementById('retrieve-recipe-btn');
  const inviteBtn = document.getElementById('invite-btn');

  const backToMenu1 = document.getElementById('back-to-menu1');
  const backToMenu2 = document.getElementById('back-to-menu2');
  const backToMenu3 = document.getElementById('back-to-menu3');

  loginBtn.addEventListener('click', () => {
    screen1.classList.add('hidden');
    screen2.classList.remove('hidden');
  });

  logoutBtn.addEventListener('click', () => {
    screen2.classList.add('hidden');
    screen1.classList.remove('hidden');
  });

  uploadRecipeBtn.addEventListener('click', () => {
    screen2.classList.add('hidden');
    uploadScreen.classList.remove('hidden');
  });

  retrieveRecipeBtn.addEventListener('click', () => {
    screen2.classList.add('hidden');
    retrieveScreen.classList.remove('hidden');
  });

  inviteBtn.addEventListener('click', () => {
    screen2.classList.add('hidden');
    inviteScreen.classList.remove('hidden');
  });

  backToMenu1.addEventListener('click', () => {
    uploadScreen.classList.add('hidden');
    screen2.classList.remove('hidden');
  });

  backToMenu2.addEventListener('click', () => {
    retrieveScreen.classList.add('hidden');
    screen2.classList.remove('hidden');
  });

  backToMenu3.addEventListener('click', () => {
    inviteScreen.classList.add('hidden');
    screen2.classList.remove('hidden');
  });
});
