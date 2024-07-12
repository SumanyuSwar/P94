var firebaseConfig = {
    apiKey: "AIzaSyCfkf9Xo67I4hsRSQV8GylXNAQeetiWorA",
    authDomain: "kwitter-project-90bd3.firebaseapp.com",
    databaseURL: "https://kwitter-project-90bd3-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-90bd3",
    storageBucket: "kwitter-project-90bd3.appspot.com",
    messagingSenderId: "391519965352",
    appId: "1:391519965352:web:1d8b3081e045199468329d"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var user_name = ""
var password1 = ""
function addUser(){
    user_name = document.getElementById("user_name").value
    password1 = document.getElementById("passward_value").value
    localStorage.setItem("User Name", user_name)
    if (user_name == ""){
        document.getElementById("error").style.color = "Red"
        document.getElementById("error").innerHTML = "Error, Please enter username"
        document.getElementById("error").style.fontSize = "20px"
        setTimeout(function time(){
            document.getElementById("error").innerHTML = ""
        }, 1000)
    }else if(password1 == ""){
        document.getElementById("error").style.color = "Red"
        document.getElementById("error").innerHTML = "Error, Please enter password"
        document.getElementById("error").style.fontSize = "20px"
        setTimeout(function time(){
            document.getElementById("error").innerHTML = ""
        }, 1000)
    }else{
        window.location = "index2.html"
    }
}
function loadUser(){
    document.getElementById("user2_name").innerText = localStorage.getItem("User Name")
    firebase.database().ref("/").child(user_name).update({
        username: user_name,
        password: password1,
    })
}

