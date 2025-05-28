document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('tuyizere').value.trim();
  const email = document.getElementById('tuyizere@gmail.com').value.trim();
  const password = document.getElementById('tour').value;

  if (!username || !email || !password) {
    document.getElementById('message').textContent = 'Please fill in all fields.';
    return;
  }

  // Simulate saving data (usually you'd use a backend)
  localStorage.setItem('user', JSON.stringify({ username, email }));

  // Redirect to Home page
  window.location.href = 'home.html';
});