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