var attempt = 5; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "20IT138" && password == "CHARUSAT") {
    alert("Login successfully");
    window.location = "success.html"; // Redirecting to other page.
    return false;
  } else {
    attempt--; // Decrementing by one.
    alert("Wrong I'd and Password.");
    alert("You have left " + attempt + " attempt;");
    // Disabling fields after 5 attempts.
    if (attempt == 0) {
      document.getElementById("username").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("submit").disabled = true;
      return false;
    }
  }
}
