var firebaseConfig = {
  apiKey: "AIzaSyB67CUJ7-PbReag3bcPaySX4WKsADc5zF4",
  authDomain: "contact-8fabd.firebaseapp.com",
  databaseURL: "https://contact-8fabd.firebaseio.com",
  projectId: "contact-8fabd",
  storageBucket: "contact-8fabd.appspot.com",
  messagingSenderId: "441046774138",
  appId: "1:441046774138:web:07deb43219881eda09a6c3",
  measurementId: "G-75XK3HKH0E"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  var data = firebase.database().ref('Contact');
  
$("#submit").click(function(){
  var name = $("#name").val();
  var track = $("#track").val();
  var email = $("#email").val();
  var phone = $("#phone").val();

  var newmessage=data.push()
  newmessage.set({
    name:name,
    track:track,
    email:email,
    phone:phone
  })
})


  
 