function changeMe() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var letters = /^[A-Za-z]+$/;
  var numbers = /^[0-9]+$/;
  if (username == "" || password == "") {
    alert("Hər iki xana doldurulmalıdır");
  } else if (!username.match(letters) && !password.match(numbers)) {
    alert("Username və Password digər simvollardan ibarət ola bilməz!");
  } else if (!username.match(letters)) {
    alert("Username yalnız hərflərdən ibarət olmalıdır!");
  } else if (!password.match(numbers)) {
    alert("Password yalnız rəqəmlərdən ibarət olmalıdır!");
  }

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  if (username.match(letters) && password.match(numbers)) {
    document.getElementById(
      "button"
    ).innerHTML = `Welcome, ${localStorage.getItem("username")}`;
    document.getElementById("button").style.color = "darkblue";
    document.getElementById("button").style.backgroundImage = "none";
    document.getElementById("button").style.fontWeight = "bold";
  }
}
