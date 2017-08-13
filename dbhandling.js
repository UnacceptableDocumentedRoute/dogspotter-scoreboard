// FIREBASE
var config = {
	apiKey: "AIzaSyCgBXIc_-Z4b_lt82avTaiYzksO_M7KItg",
	authDomain: "dogspotter-scoreboard-db.firebaseapp.com",
	databaseURL: "https://dogspotter-scoreboard-db.firebaseio.com",
	storageBucket: "bucket.appspot.com"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

// firebase.database().ref('users/')

// Authentication
var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithRedirect(provider);

// Create a function to get the value of data
// function getValue()
// {
// 	return firebase.database().ref('/test/p').once('value').then(function(snapshot) {
// 	var username = snapshot.val().username;
// 	});
// }

// Create add points function (NOT FINSIHED!)
// function addPoints(name,value) 
// {
// 	firebase.database().ref(name).set({
// 		name: value,
// 	});
// }

// addPoints(test,20);
