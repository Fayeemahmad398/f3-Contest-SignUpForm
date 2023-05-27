if (JSON.parse(localStorage.getItem("userData"))) {
  let data = JSON.parse(localStorage.getItem("userData"));

  document.getElementById("name").innerText = data.fullname;
  document.getElementById("email").innerText = data.email;
  document.getElementById("pass").innerText = data.password;
}

document.getElementById("profilebtn").addEventListener("click", () => {
  event.preventDefault();

  if (!JSON.parse(localStorage.getItem("userData"))) {
    window.location.href = "./signUp.html";
  } else {
    alert("You allready have a Profile !");
  }
});

document.getElementById("logout").addEventListener("click", () => {
  document.getElementById("name").innerText = "";
  document.getElementById("email").innerText = "";
  document.getElementById("pass").innerText = "";
  localStorage.removeItem("userData");
});

document.getElementById("signup").addEventListener("click", function () {
  event.preventDefault();
  if (!JSON.parse(localStorage.getItem("userData"))) {
    window.location.href = "./signUp.html";
  } else {
    alert("You have allready signed up !");
  }
});
