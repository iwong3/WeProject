(function() {
	
	//Initialize Firebase
	const config = {
		apiKey: "AIzaSyC7hvQ1qhU4-n01qVPI2vAt3Gs9fqMbBd0",
		authDomain: "testfirebase-1fb45.firebaseapp.com",
		databaseURL: "https://testfirebase-1fb45.firebaseio.com",
		projectId: "testfirebase-1fb45",
		storageBucket: "testfirebase-1fb45.appspot.com",
		messagingSenderId: "79263535882",
	};
	firebase.initializeApp(config);
	
	//Get elements
	const preObject = document.getElementById('project');
	
	//Create references
	const dbRefObject = firebase.database().ref().child('project');
	
	//Sync object changes
	dbRefObject.on('value', snap => console.log(snap.val()));
	
}());