const firebaseConfig = {
  apiKey: "AIzaSyCc9bAcF1pQcuabONzrDMjia0tL5ni03Ak",
  authDomain: "kwitter-final-b7754.firebaseapp.com",
  databaseURL: "https://kwitter-final-b7754-default-rtdb.firebaseio.com",
  projectId: "kwitter-final-b7754",
  storageBucket: "kwitter-final-b7754.appspot.com",
  messagingSenderId: "1098604962366",
  appId: "1:1098604962366:web:fabd693f2556816863276f",
  measurementId: "G-N0VKFW72XY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
samar_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + samar_name + " !";

function Add_room() {
  room_name = document.getElementById("Room_name").value;
  firebase.database().ref("/").child(room_name).update({
        Purpose: "add room"
  });
  localStorage.setItem("Room_name", room_name);
  window.location = "kwitter_page.html";
}


