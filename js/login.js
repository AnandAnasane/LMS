
        // --------Lalit JS code ------------

    // Toggle password visibility
const passwordInput = document.getElementById('password');
const passwordToggle = document.getElementById('password-toggle');

passwordToggle.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordToggle.innerHTML = '<i class="bi bi-eye-slash"></i>';
    } else {
        passwordInput.type = 'password';
        passwordToggle.innerHTML = '<i class="bi bi-eye"></i>';
    }
});

// Form validation function
function validateAndSubmit(event) {
    event.preventDefault(); // Prevent form from submitting and reloading the page
    let isValid = true;

    // Get form input values
    const mail = document.getElementById('e1').value.trim();
    const pwd = document.getElementById('password').value.trim();
    const role = document.getElementById('role').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    // Error messages
    let errors = {
        username: '',
        password: '',
        role: '',
        rememberMe: ''
    };

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!mail) {
        errors.username = '* Email should not be empty.';
        isValid = false;
    } else if (!emailPattern.test(mail)) {
        errors.username = '* Please enter a valid E-mail ID.';
        isValid = false;
    }

    // Password validation
    if (!pwd) {
        errors.password = '* Password should not be empty.';
        isValid = false;
    } else if (pwd.length < 8) {
        errors.password = '* Password must be at least 8 characters long.';
        isValid = false;
    }

    // Role validation
    if (!role) {
        errors.role = '* Please select a role.';
        isValid = false;
    }

    // Remember Me checkbox validation
    if (!rememberMe) {
        errors.rememberMe = '* You must agree to remember your login.';
        isValid = false;
    }

    // Display error messages
    document.getElementById('usernameError').textContent = errors.username;
    document.getElementById('passwordError').textContent = errors.password;
    document.getElementById('roleError').textContent = errors.role;
    document.getElementById('rememberMeError').textContent = errors.rememberMe;

    if (isValid) {
        // Map the role number to a string value
        // const roleMap = {
        //     "1": "Student",
        //     "2": "Trainer",
        //     "3": "Admin"
        // };
        
        // If the form is valid, proceed with backend API submission
        const loginData = {
            email: mail,
            password: pwd,
            role: role
        };
        console.log(loginData);

        fetch('http://65.1.23.148/users/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
        })
            .then(response => response.json())
            .then(data => {
                if (data.token) {
                    // Store the token and user information in localStorage or sessionStorage
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('user', JSON.stringify(data.user));

                    alert('Login successful!');
                    window.location.href = 'userProfile.html'; // Redirect to user profile page
                } else {
                    alert('Login failed: ' + data.detail);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            });
    }

    return isValid;
}

// Attach combined validation and submission function to form submission
document.querySelector('form').addEventListener('submit', validateAndSubmit);


      
