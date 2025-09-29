document.getElementById("signupForm").addEventListener("submit", 
function(e){
    e.preventDefault();
    let valid = true;

    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    const firstname = document.getElementById("firstname").value.trim();
    if(firstname.length<3){
        document.getElementById("firstnameError").textContent="Firstname must be atleast 3 characters";
        valid = false;
    }

    const lastname = document.getElementById("lastname").value.trim();
    if(lastname.length<3){
        document.getElementById("lastnameError").textContent="Lastname must be atleast 3 characters";
        valid = false;
    }

    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!emailPattern.test(email)){
        document.getElementById("emailError").textContent="Invalid email";
        valid = false;
    }

    const password = document.getElementById("password").value;
    if(password.length<6){
        document.getElementById("passwordError").textContent="This password isn't strong enough";
        valid = false;
    }

    const confirmPassword = document.getElementById("confirmPassword").value;
    if(password!==confirmPassword){
        document.getElementById("confirmPasswordError").textContent="Password doesn't match";
        valid = false;
    }

    if(valid){
        alert("Signup Successfull");
        e.target.submit();
    }
});