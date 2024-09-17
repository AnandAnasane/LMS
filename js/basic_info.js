//Basic Information Validation

function validateForm() {
    let isValid = true;

    // Get all the input fields and error divs
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const branchName = document.getElementById('branchName');
    const counsellorName = document.getElementById('counsellorName');
    const mode = document.getElementById('mode');

    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const branchNameError = document.getElementById('branchNameError');
    const counsellorNameError = document.getElementById('counsellorNameError');
    const modeError = document.getElementById('modeError');

    // Reset all error messages
    firstNameError.textContent = '';
    lastNameError.textContent = '';
    emailError.textContent = '';
    phoneError.textContent = '';
    branchNameError.textContent = '';
    counsellorNameError.textContent = '';
    modeError.textContent = '';

    // Validate first name
    if (firstName.value.trim() === '') {
        firstNameError.textContent = 'First name is required.';
        isValid = false;
    }

    // Validate last name
    if (lastName.value.trim() === '') {
        lastNameError.textContent = 'Last name is required.';
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '') {
        emailError.textContent = 'Email is required.';
        isValid = false;
    } else if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate phone number
    const phonePattern = /^\d{10}$/; // Example pattern for a 10-digit phone number
    if (phone.value.trim() === '') {
        phoneError.textContent = 'Phone number is required.';
        isValid = false;
    } else if (!phonePattern.test(phone.value.trim())) {
        phoneError.textContent = 'Please enter a valid 10-digit phone number.';
        isValid = false;
    }

    // Validate branch name
    if (branchName.value === '' || branchName.value === 'Select Branch') {
        branchNameError.textContent = 'Please select a branch.';
        isValid = false;
    }

    // Validate counsellor name
    if (counsellorName.value.trim() === '') {
        counsellorNameError.textContent = 'Counsellor name is required.';
        isValid = false;
    }

    // Validate mode
    if (mode.value === '' || mode.value === 'Select Branch') {
        modeError.textContent = 'Please select a mode.';
        isValid = false;
    }

    return isValid;
}

//Profile Upload Functionality

document.getElementById('imageUpload').addEventListener('change', function (event) {
    const reader = new FileReader();
    reader.onload = function () {
        const imgSrc = reader.result;
        document.getElementById('imagePreview1').src = imgSrc;
        document.getElementById('imagePreview2').src = imgSrc;
    };
    reader.readAsDataURL(event.target.files[0]);
});
