const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cnfpass = document.getElementById("cnfpass");
const signbtn = document.getElementById("signup");
let userData = {};

document.getElementById("profilebtn").addEventListener("click", () => {
  alert("Please signup first !");
});

signbtn.addEventListener("click", handleSignup);

function handleSignup() {
  event.preventDefault();
  if (
    !name.value.trim() ||
    !email.value.trim() ||
    !password.value.trim() ||
    !cnfpass.value.trim()
  ) {
    document.getElementById("redmsg").style.display = "block";
    document.getElementById("greenmsg").style.display = "none";
    return;
  } else {
    if (cnfpass.value.trim() === password.value.trim()) {
      userData.fullname = name.value;
      userData.email = email.value;
      userData.password = password.value;
      userData.cnfpass = cnfpass.value;
      userData.token = generateToken();
      localStorage.setItem("userData", JSON.stringify(userData));
      document.getElementById("redmsg").style.display = "none";
      document.getElementById("greenmsg").style.display = "block";

      window.location.href = "./profile.html";
      name.value = "";
      email.value = "";
      password.value = "";
      cnfpass.value = "";
    } else {
      alert("Password should be same as Confirm  Password !");
      document.getElementById("redmsg").style.display = "none";
      name.value = "";
      email.value = "";
      password.value = "";
      cnfpass.value = "";
    }
  }
}

function generateToken() {
  let randomString = "sdfa#$%sd923#$%33#$%7asfg345dfg3#$%^34%34o54";
  let genToken = "";
  for (let i = 0; i < 16; i++) {
    genToken += randomString[Math.floor(Math.random() * randomString.length)];
  }
  return genToken;
}
