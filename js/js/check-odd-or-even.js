function checkOddOrEven() {
	var inputbox = document.querySelector("#inputvalue");
	var inputvalue = inputbox.value;
	if(inputvalue%2 != 0){
		alert("The given number " + inputvalue + " is an odd number");
	}
	else{
		alert("The given number " + inputvalue + " is an even number");
	}

}