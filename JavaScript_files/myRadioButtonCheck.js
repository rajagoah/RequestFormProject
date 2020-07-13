/**
 script to validate if the radio button is checked 
 */
function myRadioButtonCheck(){		
		//if condition to not display the optionalDiv
		let divVisibility = document.getElementById("optionalDiv");		
		if (divVisibility.style.display === "block"){
			divVisibility.style.display = "none";
		}else{
			divVisibility.style.display = "block";
		}
		
		
		//if the radio button option "Yes" is chosen, then the above optionalDiv should show up
		let radioButton = document.getElementById("yes");
		let radioButtonChoice2 = document.getElementById("no"); 
		
		if(radioButton.checked === true){
			divVisibility.style.display = "block";		
			}else if(radioButtonChoice2.checked === true){
				divVisibility.style.display = "none";
			};
	}