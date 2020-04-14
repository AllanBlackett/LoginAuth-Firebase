
// Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBFvnKT3chkedqWxblsNC4lAKNqFlNkZNM",
  authDomain: "login-auth-89fd6.firebaseapp.com",
  databaseURL: "https://login-auth-89fd6.firebaseio.com",
  projectId: "login-auth-89fd6",
  storageBucket: "login-auth-89fd6.appspot.com",
  messagingSenderId: "627983174264",
  appId: "1:627983174264:web:71d2965f7fd166fe9efb8d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Using an observer to ensure that the Auth object isn't in an intermediate 
  // state—such as initialization—when you get the current user.
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
    
    let user = firebase.auth().currentUser;

    if(user != null){
      let email = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email;
    }

  } else {
    // No user is signed in
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
  }
});

