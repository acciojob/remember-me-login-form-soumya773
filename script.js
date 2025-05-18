//your JS code here. If required.
window.addEventListener("DOMContentLoaded", () => {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const checkbox = document.getElementById("checkbox");
  const submitBtn = document.getElementById("submit");
  const existingBtn = document.getElementById("existing");

  // Check localStorage on page load
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    existingBtn.style.display = "inline";
  }

  // Form submission
  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    alert(`Logged in as ${username}`);

    if (checkbox.checked) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }

    if (localStorage.getItem("username") && localStorage.getItem("password")) {
      existingBtn.style.display = "inline";
    } else {
      existingBtn.style.display = "none";
    }
  });

  // Login as existing user
  existingBtn.addEventListener("click", () => {
    const savedUser = localStorage.getItem("username");
    if (savedUser) {
      alert(`Logged in as ${savedUser}`);
    }
  });
});
