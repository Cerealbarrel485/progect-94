// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQNui0ZEsyQeK-cMu1yx2DkxTWUt3LZ8Y",
    authDomain: "class-test-again.firebaseapp.com",
    databaseURL: "https://class-test-again-default-rtdb.firebaseio.com",
    projectId: "class-test-again",
    storageBucket: "class-test-again.appspot.com",
    messagingSenderId: "429718925472",
    appId: "1:429718925472:web:442525e52473c79a3199c5"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}