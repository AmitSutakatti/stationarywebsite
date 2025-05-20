function welcomeMsg(){
    let parms={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        
    }
    emailjs.send("service_zb6u10o", "template_fu3lron", parms)
    .then(function(response) {
        console.log("SUCCESS!", response.status, response.text);
    }, function(error) {
        console.log("FAILED...", error);
    });
}

//i used emailjs to send the email