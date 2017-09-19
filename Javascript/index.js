var styleSheetNumber = 1;

/**
* switches between the two stylesheets when the lightbulb icon is pressed
*/
function switchStyleSheet(){
	var currentStyleSheet = document.getElementById('myStyleSheet');
	if(currentStyleSheet != null){
		localStorage.setItem("style", 2);
		styleSheetNumber = 2;
		document.getElementById('myStyleSheet').setAttribute('href', './CSS/stylesheet2.css');
		document.getElementById('myStyleSheet').id = 'myStyleSheet2';
	}
	else{
		localStorage.setItem("style", 1);
		styleSheetNumber = 1;
		document.getElementById('myStyleSheet2').setAttribute('href', './CSS/stylesheet1.css');
		document.getElementById('myStyleSheet2').id = 'myStyleSheet';
	}
}

/**
* maintains whichever stylesheet you had on another page for a more immersive experience
*/
function persistentStyles(){
	if(localStorage.getItem("style") != '1'){
		document.getElementById('myStyleSheet').setAttribute('href', './CSS/stylesheet2.css');
		document.getElementById('myStyleSheet').id = 'myStyleSheet2';
	}
}
