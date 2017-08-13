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

// Using a redirect.
firebase.auth().getRedirectResult().then(function(result) 
{
	if (result.credential) 
	{
		// This gives you a Google Access Token.
		var token = result.credential.accessToken;
	}
	var user = result.user;
});

// Start a sign in process for an unauthenticated user.
var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('profile');
provider.addScope('email');
firebase.auth().signInWithRedirect(provider);

// Create a function to get the value of data
function getValue()
{
	return firebase.database().ref('/test/p').once('value').then(function(snapshot) {
	var username = snapshot.val().username;
	});
}

// Create add points function
function addPoints(name,value) 
{
	firebase.database().ref(name).set({
		name: value,
	});
}
