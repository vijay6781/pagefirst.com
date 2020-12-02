// Initialize Firebase (ADD YOUR OWN DATA)
/*var config = {
  apiKey: "xxxxx",
  authDomain: "xxxxx",
  databaseURL: "xxxxx",
  projectId: "xxxxx",
  storageBucket: "xxxxx",
  messagingSenderId: "xxxxx"
};

firebase.initializeApp(config);
*/
var firebaseConfig = {
    apiKey: "AIzaSyDa07Rcw9o_2qcmcc6Yuw5_uHv882NfbXk",
    authDomain: "web-login-ff14c.firebaseapp.com",
    databaseURL: "https://web-login-ff14c.firebaseio.com",
    projectId: "web-login-ff14c",
    storageBucket: "web-login-ff14c.appspot.com",
    messagingSenderId: "382020008280",
    appId: "1:382020008280:web:af90568116e657ecad4d2d",
    measurementId: "G-DH66LQTVPG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}
