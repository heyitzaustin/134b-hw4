function onClickSignUp() {

  var myFirebaseRef = new Firebase("https://torrid-fire-6209.firebaseio.com/");
  myFirebaseRef.createUser({
  email    : document.getElementById('usermail').value,
  password : document.getElementById('password').value
}, function(error, userData) {
  if (error) {
    console.log("Error creating user:", error);
    var signUpFailed = document.getElementById("signInFailed");
    signUpFailed.style.display = "block";
  } else {
    console.log("Successfully created user account with uid:", userData.uid);
    var signUpText = document.getElementById("signInMessage");
    signUpText.style.display = "block";
  }
});


}

function onClickLogin(){
  var myFirebaseRef = new Firebase("https://torrid-fire-6209.firebaseio.com/");
  myFirebaseRef.authWithPassword({
    email    : document.getElementById('usermail').value,
    password : document.getElementById('password').value
  }, function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
      var signUpFailed = document.getElementById("signInFailed");
      signUpFailed.style.display = "block";
    } else {
      console.log("Authenticated successfully with payload:", authData);
      window.location.href = "welcome.html";
    }
  });

}