function switchStyleSheet(){
	var currentStyleSheet = document.getElementById('myStyleSheet');
	if(currentStyleSheet != null){
		document.getElementById('myStyleSheet').setAttribute('href', './CSS/stylesheet2.css');
		document.getElementById('myStyleSheet').id = 'myStyleSheet2';
	}
	else{
		document.getElementById('myStyleSheet2').setAttribute('href', './CSS/stylesheet1.css');
		document.getElementById('myStyleSheet2').id = 'myStyleSheet';
	}
}
