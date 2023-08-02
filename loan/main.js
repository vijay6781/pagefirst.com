// Initialize Firebase (ADD YOUR OWN DATA)
var firebaseConfig = {
apiKey: "AIzaSyAWIjw2yst3MA_GbCA7ubrnGz3G6RvvX-4",
authDomain: "okaychat-83e1c.firebaseapp.com",
databaseURL: "https://okaychat-83e1c-default-rtdb.asia-southeast1.firebasedatabase.app/",
projectId: "okaychat-83e1c",
storageBucket: "okaychat-83e1c.appspot.com",
messagingSenderId: "1047817614674",
appId: "1:1047817614674:web:2f522c8c3f47158226b68b"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();


document.querySelector('#contactForm').addEventListener('submit', e => {
e.preventDefault()

let name = document.querySelector('#name').value;
let email = document.querySelector('#email').value;
let company= document.querySelector('#company').value;
let phone = document.querySelector('#phone').value;
let amount = document.querySelector('#loan').value;


db.collection('messages')
.add({
name:name,
email:email ,
phone:phone,
company:company,
amount:amount,
date: firebase.firestore.Timestamp.fromMillis(Date.now())
})
.then(docRef => {
console.log(`Document written with ID: ${docRef.id}`)
document.querySelector('#contactForm').reset()
})
.catch(error => {
console.log(`Error adding document: ${error}`)
})
document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);
})

// Reference messages collection
// var messagesRef = firebase.database().ref('messages');

// // Listen for form submit
// document.getElementById('contactForm').addEventListener('submit', submitForm);

// // Submit form
// function submitForm(e){
//   e.preventDefault();

//   // Get values
//   var name = getInputVal('name');
//   var company = getInputVal('company');
//   var email = getInputVal('email');
//   var phone = getInputVal('phone');
//   var message = getInputVal('message');
//   console.log(name);

//   // Save message
//   saveMessage(name, company, email, phone, message);

//   // Show alert
  // document.querySelector('.alert').style.display = 'block';

  // // Hide alert after 3 seconds
  // setTimeout(function(){
  //   document.querySelector('.alert').style.display = 'none';
  // },3000);

//   // Clear form
//   document.getElementById('contactForm').reset();
// }

// // Function to get get form values
// function getInputVal(id){
//   return document.getElementById(id).value;
// }

// // Save message to firebase
// function saveMessage(name, company, email, phone, message){
//   var newMessageRef = messagesRef.push();
//   newMessageRef.set({
//     name: name,
//     company:company,
//     email:email,
//     phone:phone,
//     message:message
//   });
// }
