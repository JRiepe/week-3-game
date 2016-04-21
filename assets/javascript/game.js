// Javscript Hangman game



//
// Sets the computer choices 
// Declares the tallies to 0 

function startGame() {

	var cars = ['Chevrolet', 'Ford', 'Cadillac', 'Volkswagen', 'Toyota', 'Nissan'];
	document.getElementById("guessesLeft").innerHTML = cars;
// Declares the tallies to 0 
	var badGuesses = 0;
	var wins = 0;
	var losses = 0;
	var lettersTried = [];


// When the user presses the key it records the keypress and then sets it to userguess
	var car = cars [Math.floor(Math.random() * cars.length)];
	consol.log(car);
	//document.onkeyup = function(event) {
		//var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); }
		// for (i = 0; i < compChoice.length; i++)
		
		//if userGuess ==

	
	}

	
//	} 


		// Taking the tallies and displaying them in HTML
		

		// Placing the html into the game ID
		// document.querySelector('#game').innerHTML = answer;

	


//</script>
// document.getElementById("demo").innerHTML = "Hello Dolly.";