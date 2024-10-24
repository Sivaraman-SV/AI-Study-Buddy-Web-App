function getName() {
    var name = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if (name.length >= 8 && isNaN(name)) {
        console.log("Valid Name: " + name);
        if (pass.length < 8) {
            document.getElementById("error-message").innerHTML = "Invalid Password: Password must be at least 8 characters long.";
            return;
        } else if (pass.length > 20) {
            document.getElementById("error-message").innerHTML = "Invalid Password: Password cannot be greater than 20 characters long.";
            return;
        } else {
            console.log("Valid Password: " + pass);
        }
    } else if (name.length < 8) {
        document.getElementById("error-message").innerHTML = "Invalid Name: Username must be at least 8 characters long and not a number.";
        return;
    } else {
        document.getElementById("error-message").innerHTML = "Invalid Name: Username cannot be a number.";
        return;
    }
    document.getElementById("error-message").innerHTML = "Submitted";
}
