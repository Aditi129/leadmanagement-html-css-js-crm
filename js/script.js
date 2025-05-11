function openModal(type) {
    document.getElementById(type + "Modal").style.display = "block";
  }
  
  function closeModal(type) {
    document.getElementById(type + "Modal").style.display = "none";
  }
  
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = 'dashboard.html';
  });
  
  document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = 'dashboard.html';
  });
  