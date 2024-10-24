async function validateCredentials(username, password) {
    try {
        const apiUrl = 'https://.com/validate';
        
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: username, password: password })
        });
        
        const result = await response.json();
        
        if (result.success) {
            console.log('Login Successful!');
            document.getElementById("error-message").innerHTML = "Login Successful!";
        } else {
            console.log('Invalid Credentials: ' + result.message);
            document.getElementById("error-message").innerHTML = "Invalid Credentials: " + result.message;
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById("error-message").innerHTML = "An error occurred. Please try again later.";
    }
}


document.querySelector('.login-button').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    validateCredentials(username, password);
});
