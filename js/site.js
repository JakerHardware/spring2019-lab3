// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
    $('html').removeClass('nojs');
    $('html').addClass('hasjs');
    $('#submit').on('click', function() { // when you click the div
        $(this).addClass('active'); // add the class 'no-hover'
    });
});

// functions

function myEventFucntion2(){

}

function myEventFunction(){
    // local variables
    var agecheck = document.getElementById("age-verification");
    var submitbutton = document.getElementById("submit");
    var emailbox = document.getElementById("email");
    var text = "Congratulations, You are now signed up for our Newsletter.";
    var isValidEmail = emailbox.checkValidity();

    // checks if true
    if((agecheck.checked == true) && (isValidEmail)){
        
        // prompt user
        alert('Submission Confirmed: '+ text);

        // disable submit button;
        submitbutton.style.opacity = .2;
        submitbutton.style.backgroundColor = lightgrey;
        
        // disables hover
        //submitbutton.addClass('active');
    } else if (isValidEmail == false){
        alert('Please enter a valid email address.');
    }
    else{
        alert('Please confirm if you are 18 years old or older.');
    }

}

// main

var f1 = document.getElementById('submit'); //create variable
f1.addEventListener('click', myEventFunction); //run method

