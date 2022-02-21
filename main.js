const userEmailField = document.getElementById("email");

const userPasswordField = document.getElementById("password");

const login = document.getElementById("login-btn");
login.addEventListener("click", function () {
  if (
    userEmailField.value == "abc@gmail.com" &&
    userPasswordField.value == "123456"
  ) {
    window.location.href = "bank.html";
  } else {
    alert("Wrong user name or password");
    window.location.href = "index.html";
  }
});
