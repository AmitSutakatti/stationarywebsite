function sendMail(){
    let parms={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }
    emailjs.send("service_yv1nq0j", "template_ipr4p8n", parms)
    .then(function(response) {
        console.log("SUCCESS!", response.status, response.text);
    }, function(error) {
        console.log("FAILED...", error);
    });
}