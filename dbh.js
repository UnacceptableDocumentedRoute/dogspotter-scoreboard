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

// Create a function to get the value of data
function getValue(name)
{
	return firebase.database().ref(name).once('value').then(function(snapshot) {
	var username = snapshot.val().username;
	});
}