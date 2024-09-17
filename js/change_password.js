
//Change Password Validation


    (function () {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    // Clear previous errors
                    document.getElementById('currentPasswordError').textContent = '';
                    document.getElementById('newPasswordError').textContent = '';
                    document.getElementById('confirmPasswordError').textContent = '';

                    // Validate fields
                    var isValid = true;

                    var currentPassword = document.getElementById('currentPassword').value;
                    var newPassword = document.getElementById('newPassword').value;
                    var confirmPassword = document.getElementById('confirmPassword').value;

                    // Check current password
                    if (!currentPassword) {
                        document.getElementById('currentPasswordError').textContent = 'Please enter the current password.';
                        isValid = false;
                    }

                    // Check new password
                    if (!newPassword) {
                        document.getElementById('newPasswordError').textContent = 'Please enter the new password.';
                        isValid = false;
                    } else {
                        // Check for minimum length, alphanumeric, and special character
                        var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
                        if (!passwordPattern.test(newPassword)) {
                            document.getElementById('newPasswordError').textContent = 'Password must be at least 8 characters long and include a mix of letters, numbers, and special characters.';
                            isValid = false;
                        }
                    }

                    // Check confirm password
                    if (!confirmPassword) {
                        document.getElementById('confirmPasswordError').textContent = 'Please confirm the new password.';
                        isValid = false;
                    } else {
                        // Check if new and confirm passwords match
                        if (newPassword !== confirmPassword) {
                            document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
                            isValid = false;
                        }
                    }

                    if (!isValid) {
                        event.preventDefault();
                        event.stopPropagation();
                    }

                    form.classList.add('was-validated');
                }, false);
            });
    })();