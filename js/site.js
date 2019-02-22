// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
    $('html').removeClass('nojs');
    $('html').addClass('hasjs');
});

// functions
function checksubmit(){
    alert('hi');
    
    // disable submit button;
    var submitbutton = document.getElementById("submit");
    submitbutton.style.opacity = 0.2;
    submitbutton.style.backgroundColor = lightgrey;
    
    return false;
};

/***
function myEventFunction(){
    // local variables
    var agecheck = document.getElementById("age-verification");
    var submitbutton = document.getElementById("submit");
    var emailbox = document.getElementById("email");
    var text = "Congratulations, You are now signed up for our Newsletter.";

    // checks if true
    if(this.checksValidation()){
        alert('Valid');
    }

    if((agecheck.checked == true) && (emailbox.checkValidation() == true)){

        // prompt user
        alert('Submission Confirmed: '+ text);

        // disable submit button;
        submitbutton.style.opacity = 0.2;
        submitbutton.style.backgroundColor = lightgrey;

    } else{
        alert('Not Submitted');
        submitbutton.classList.add(".notsubmitted");
        submitbutton.classList.remove(".submitted");
    }
}
*/

// main

var f1 = document.getElementById('submit'); //create variable
// f1.addEventListener('click', myEventFunction); //run method

document.getElementById("Test1").addEventListener('submit', checksubmit);
