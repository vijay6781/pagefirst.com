var firebaseConfig = {
	apiKey: "AIzaSyAWIjw2yst3MA_GbCA7ubrnGz3G6RvvX-4",
	authDomain: "okaychat-83e1c.firebaseapp.com",
	databaseURL: "https://okaychat-83e1c-default-rtdb.asia-southeast1.firebasedatabase.app/",
	projectId: "okaychat-83e1c",
	storageBucket: "okaychat-83e1c.appspot.com",
	messagingSenderId: "1047817614674",
	appId: "1:1047817614674:web:2f522c8c3f47158226b68b"
}

firebase.initializeApp(firebaseConfig)

var db = firebase.firestore()

if (!localStorage.getItem('name')) {
	name = prompt('What is your name?')
	localStorage.setItem('name', name)
} else {
	name = localStorage.getItem('name')
}
document.querySelector('#name').innerText = name


document.querySelector('#change-name').addEventListener('click', () => {
	name = prompt('What is your name?')
	localStorage.setItem('name', name)
	document.querySelector('#name').innerText = name
})

document.querySelector('#message-form').addEventListener('submit', e => {
	e.preventDefault()

	let message = document.querySelector('#message-input').value
	db.collection('messages')
	.add({
		name: name,
		message: message
		})
	.then(docRef => {
		console.log(`Document written with ID: ${docRef.id}`)
		document.querySelector('#message-form').reset()
	})
	.catch(error => {
		console.log(`Error adding document: ${error}`)
	})
})

db.collection('messages')
.onSnapshot(snapshot => {
	document.querySelector('#messages').innerHTML = ''
	snapshot.forEach(doc => {
		let message = document.createElement('div')
		message.innerHTML = `
		<p class="name">${doc.data().name}</p>
		<p>${doc.data().message}</p>
		`
		document.querySelector('#messages').prepend(message)
	})
})