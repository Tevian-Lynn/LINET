var registerForm = document.getElementById("registerForm");
var loginForm = document.getElementById("loginForm");

if (registerForm) {
  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    localStorage.setItem("accountName", name);
    localStorage.setItem("accountEmail", email);
    localStorage.setItem("accountPassword", password);

    alert("Account created successfully! Please log in.");
    window.location.href = "login.html";
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var savedEmail = localStorage.getItem("accountEmail");
    var savedPassword = localStorage.getItem("accountPassword");

    if (email === savedEmail && password === savedPassword) {
      sessionStorage.setItem("loggedIn", "true");
      window.location.href = "welcome.html";
    } else {
      alert("Incorrect email or password. Please try again.");
    }
  });
}

