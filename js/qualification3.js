
 //Qualifications Validation



    // Form validation
    (function () {
        'use strict'
        var form = document.getElementById('qualificationForm')
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false)
    })()
