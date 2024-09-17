
//UI-Validation and API Combine code
 
// Toggle password visibility
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm_password');
const passwordToggle = document.getElementById('password-toggle');
const confirmPasswordToggle = document.getElementById('confirm-password-toggle');

passwordToggle.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordToggle.innerHTML = '<i class="bi bi-eye-slash"></i>';
    } else {
        passwordInput.type = 'password';
        passwordToggle.innerHTML = '<i class="bi bi-eye"></i>';
    }
});

confirmPasswordToggle.addEventListener('click', () => {
    if (confirmPasswordInput.type === 'password') {
        confirmPasswordInput.type = 'text';
        confirmPasswordToggle.innerHTML = '<i class="bi bi-eye-slash"></i>';
    } else {
        confirmPasswordInput.type = 'password';
        confirmPasswordToggle.innerHTML = '<i class="bi bi-eye"></i>';
    }
});

// Form validation
function validateForm() {
    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    // First Name validation
    const firstName = document.getElementById('first_name').value.trim();
    if (!firstName) {
        document.getElementById('error_first_name').textContent = '**First name is required.';
        isValid = false;
    }

    // Last Name validation
    const lastName = document.getElementById('last_name').value.trim();
    if (!lastName) {
        document.getElementById('error_last_name').textContent = '**Last name is required.';
        isValid = false;
    }

    // Phone validation
    const phone = document.getElementById('phone').value.trim();
    const phonePattern = /^[0-9]{10}$/;
    if (!phone) {
        document.getElementById('error_phone').textContent = '**Phone number is required.';
        isValid = false;
    } else if (!phonePattern.test(phone)) {
        document.getElementById('error_phone').textContent = '**Phone number must be 10 digits.';
        isValid = false;
    }

    // Role validation
    const role = document.getElementById('role').value;
    if (!role) {
        document.getElementById('error_role').textContent = '**Please select a role.';
        isValid = false;
    }

    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        document.getElementById('error_email').textContent = '**Email is required.';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('error_email').textContent = '**Invalid email format.';
        isValid = false;
    }

    // Password validation
    const password = document.getElementById('password').value.trim();
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!password) {
        document.getElementById('error_password').textContent = '**Password is required.';
        isValid = false;
    } else if (!passwordPattern.test(password)) {
        document.getElementById('error_password').textContent = '**Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.';
        isValid = false;
    }

    // Confirm Password validation
    const confirmPassword = document.getElementById('confirm_password').value.trim();
    if (!confirmPassword) {
        document.getElementById('error_confirm_password').textContent = '**Please confirm your password.';
        isValid = false;
    } else if (confirmPassword !== password) {
        document.getElementById('error_confirm_password').textContent = '**Passwords Mismatch.';
        isValid = false;
    }

    // Terms and Conditions validation
    const terms = document.getElementById('terms').checked;
    if (!terms) {
        document.getElementById('error_terms').textContent = '**You must agree to the terms and conditions.';
        isValid = false;
    }

    return isValid;
}

// Form submission and API call
document.querySelector("form").addEventListener("submit", async function(event) {
    event.preventDefault();
    console.log("click")
    // First validate the form
    if (!validateForm()) {
        return; // If form is not valid, do not proceed further
    }

    // Gather form data after validation
    const firstName = document.getElementById('first_name').value.trim();
    const lastName = document.getElementById('last_name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const role = document.getElementById('role').value;
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm_password').value.trim();

    console.log(phone, role, email, password, confirmPassword, firstName, lastName)
    // Prepare API request payload
    const payload = {
        first_name: firstName,
        last_name: lastName,
        phone: phone,
        email: email,
        password: password,
        role: role
    };
    console.log(payload);
    
    try {
        const response = await fetch('http://65.1.23.148/users/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            const data = await response.json();
            alert('Registration successful!');
            window.location.href = 'login.html';  // Redirect to login page
        } else {
            const errorData = await response.json();
            alert(`Registration failed: ${errorData.message || 'Unknown error'}`);
        }
    } catch (error) {
        alert('Error connecting to the server. Please try again later.');
    }
});























