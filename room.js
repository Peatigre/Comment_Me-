var firebaseConfig = {
    apiKey: "AIzaSyDChy66fIH0OtUi7acoLKWDQV21zP7m9No",
    authDomain: "comment-me-78347.firebaseapp.com",
    databaseURL: "https://comment-me-78347-default-rtdb.firebaseio.com",
    projectId: "comment-me-78347",
    storageBucket: "comment-me-78347.appspot.com",
    messagingSenderId: "988589201657",
    appId: "1:988589201657:web:b4f49fbf538e4000a26a28"
  };
      firebase.initializeApp(firebaseConfig);
    
   
  function getData() {firebase.database().ref("/").on('value', function(snapshot) 
    {document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) 
      {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
        console.log("room name -" + Room_names);
        row = "<div class='room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)' >#"+Room_names+" </div> <hr> ";
        document.getElementById("output").innerHTML += row;
  
        });});}
  getData();
  
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
  
  function addRoom() 
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
    localStorage.setItem("room_name", room_name);
    window.location = "page.html"
  }
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "page.html";
  }
  
  function logout()
  {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
    
  }