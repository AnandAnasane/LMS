

        document.addEventListener('DOMContentLoaded', function () {
            const form = document.querySelector('form');
            const emailInput = document.getElementById('exampleInputEmail1');
            const emailError = document.getElementById('usernameError');
            const submitButton = document.getElementById('submitButton'); // Ensure ID matches

            form.addEventListener('submit', function (event) {
                event.preventDefault(); // Prevent default form submission

                let mail = emailInput.value.trim();
                let errors = {
                    username: ''
                };

                // Email validation pattern
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (mail === '') {
                    errors.username = '* Email should not be empty.';
                } else if (!emailPattern.test(mail)) {
                    errors.username = '* Please enter a valid E-mail address.';
                } else {
                    errors.username = ''; // Clear error if valid
                }

                // Display error messages
                emailError.textContent = errors.username;

                // Submit the form if there are no errors
                if (errors.username === '') {
                    form.submit(); // This will submit the form if no errors are found
                }
            });
        });

 