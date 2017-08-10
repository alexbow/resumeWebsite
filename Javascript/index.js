var styleSheetNumber = 1;

function switchStyleSheet(){
	var currentStyleSheet = document.getElementById('myStyleSheet');
	if(currentStyleSheet != null){
		localStorage.setItem("style", 2);
		styleSheetNumber = 2;
		document.getElementById('myStyleSheet').setAttribute('href', './CSS/stylesheet2.css');
		document.getElementById('myStyleSheet').id = 'myStyleSheet2';
		document.getElementById('lightbulb').setAttribute('src', './Resources/lightbulbWhite.png');
		document.getElementById('portfolio').setAttribute('src', './Resources/portfolioWhite.gif');
		document.getElementById('logoPicture').setAttribute('src', './Resources/logoRedTop.gif');
		document.getElementById('resume').setAttribute('src', './Resources/resumeWhite.gif');
		document.getElementById('contact').setAttribute('src', './Resources/mailWhite.gif');
		document.getElementById('experience').setAttribute('src', './Resources/experienceWhite.gif');
		document.getElementById('skills').setAttribute('src', './Resources/computerWhite.gif');
	}
	else{
		localStorage.setItem("style", 1);
		styleSheetNumber = 1;
		document.getElementById('myStyleSheet2').setAttribute('href', './CSS/stylesheet1.css');
		document.getElementById('myStyleSheet2').id = 'myStyleSheet';
		document.getElementById('lightbulb').setAttribute('src', './Resources/lightbulbBlack.png');
		document.getElementById('portfolio').setAttribute('src', './Resources/portfolioBlack.gif');
		document.getElementById('logoPicture').setAttribute('src', './Resources/logoBlueTop.gif');
		document.getElementById('resume').setAttribute('src', './Resources/resumeBlack.gif');
		document.getElementById('contact').setAttribute('src', './Resources/mailBlack.gif');
		document.getElementById('experience').setAttribute('src', './Resources/experienceBlack.gif');
		document.getElementById('skills').setAttribute('src', './Resources/computerBlack.gif');
	}
}

function persistentStyles(){
	if(localStorage.getItem("style") != '1'){
		document.getElementById('myStyleSheet').setAttribute('href', './CSS/stylesheet2.css');
		document.getElementById('myStyleSheet').id = 'myStyleSheet2';
		document.getElementById('lightbulb').setAttribute('src', './Resources/lightbulbWhite.png');
		document.getElementById('portfolio').setAttribute('src', './Resources/portfolioWhite.gif');
		document.getElementById('logoPicture').setAttribute('src', './Resources/logoRedTop.gif');
		document.getElementById('resume').setAttribute('src', './Resources/resumeWhite.gif');
		document.getElementById('contact').setAttribute('src', './Resources/mailWhite.gif');
		document.getElementById('experience').setAttribute('src', './Resources/experienceWhite.gif');
		document.getElementById('skills').setAttribute('src', './Resources/computerWhite.gif');
	}
}
