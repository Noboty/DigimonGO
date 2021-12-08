

//Global Variables
var formValidity = true;
var errorText = "";

// display current hour and greet based on it
var person= prompt("Please enter your name, agent")
var greeting;
var today= new date();
var hour = today.getHours();

function greets () {
	if (hour <12) {
	greeting = "<h1> Good morning" + person + "Welcome to DigimonGO</h1>";}
	else if (hour <19) {
	greeting = "<h1> Good Afternoon" + person + "Welcome to DigimonGO</h1>";} 
	else {
	greeting = "<h1> Good evening" + person + "Welcome to DigimonGO</h1>";}
	document.getElementById("greeting").innerHTML=greeting;
}


/* validate the form */
function validateForm(evt){
	if(evt.preventDefault){
		evt.preventDefault();
	}
	else{
		evt.returnValue = false;
	}
	formValidity = true;
	// Validate our fields
	validateBlanks();
	validatePassword();
	
	// if form Validity is true, send the data
	if (formValidity === true)
	{
		document.getElementById("errorText").innerHTML = "";
		document.getElementById("registration").submit();
	}
	//otherwise provide error messages
	else {
		document.getElementById("errorText").innerHTML = errorText;
		errorText = "";
	}
}

function validateBlanks(){
	var inputElements = document.getElementsByTagName("input");
	var elementCount = inputElements.length;
	var currentElement;
	
	for (var i = 0; i < elementCount; i++)
	{
		//Validate ALL input elements in the form
		currentElement = inputElements[i];
		if (currentElement.value === "")
		{
			formValidity = false;
			currentElement.style.background = "rgb(255,233,233)";
		}
		else {
			currentElement.style.background = "white";
		}
	}
	if (formValidity === false)
	{
		errorText += "All fields must be filled out! </br>"
	}
}

function validatePassword(){
	//Check if password matches
	var pass1 = document.getElementById("passw").value;
	var pass2 = document.getElementById("repass").value;
	if (pass1 !== pass2)
	{
		formValidity = false;
		errorText += "Passwords do not match"
	}
	/* Else, when password matches check for:
		- 8 or more characters, 
		- at least one Upper case letter, 
		- at least one digit, 
		-one special character ! @ # or $ */
	else 
	{
		if ( /.{8,}/.test(pass1) === false)
		{
			formValidity = false;
			errorText += "Your password should be 8 or more characters long </br>";
		}		
		if ( /[A-Z]/.test(pass1) === false)
			{
			formValidity = false;
			errorText += "Your password should have at least one Upper Case letter</br>";
		}
		if ( /[0-9]/.test(pass1) === false)
			{
			formValidity = false;
			errorText += "Your password should contain at least one digit</br>";
		}
		if (/[!@#$]/.test(pass1) === false)
			{
			formValidity = false;
			errorText += "Your password should have one special character: ! @ # or $</br>";
		}
	}
}

function createEventListeners(){
	var form = document.getElementById("registration");
	if (form.addEventListener){
		form.addEventListener("submit",validateForm,false);
	}
	else if (form.attachEvent) // makes sure it works on IE8 or older
	{
		form.attachEvent("onsubmit", validateForm); 
	}
}

/* run setup functions when page finishes loading */
if (window.addEventListener)
{
	window.addEventListener("load", createEventListeners, false);
	
}
else if (window.attachEvent)
{
	window.attachEvent("onload", createEventListeners)
}


