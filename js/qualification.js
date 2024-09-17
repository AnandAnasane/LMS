
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


document.addEventListener('DOMContentLoaded', function () {
    const selectElement = document.getElementById('12thOrDiploma');

    // Form field elements
    const twelveFields = {
        percentage: document.getElementById('12thPercentage'),
        actualPercentage: document.getElementById('12thActualPercentage'),
        details: document.getElementById('12thDetails')
    };

    const diplomaFields = {
        percentage: document.getElementById('diplomaPercentage'),
        actualPercentage: document.getElementById('DiplomaActualPercentage'),
        details: document.getElementById('diplomaDetails')
    };

    function toggleFields() {
        const value = selectElement.value;

        if (value === '12th') {
            // Enable 12th related fields and disable diploma fields
            enableFields(twelveFields);
            disableFields(diplomaFields);
        } else if (value === 'Diploma') {
            // Enable diploma related fields and disable 12th fields
            enableFields(diplomaFields);
            disableFields(twelveFields);
        } else if (value === 'Both') {
            // Enable all fields
            enableFields(twelveFields);
            enableFields(diplomaFields);
        } else {
            // Disable all fields
            disableFields(twelveFields);
            disableFields(diplomaFields);
        }
    }

    function enableFields(fields) {
        for (let key in fields) {
            if (fields[key]) {
                fields[key].disabled = false;
                fields[key].required = true; // Make required when enabled
            }
        }
    }

    function disableFields(fields) {
        for (let key in fields) {
            if (fields[key]) {
                fields[key].disabled = true;
                fields[key].required = false; // Remove required when disabled
            }
        }
    }

    // Attach event listener and call function initially
    selectElement.addEventListener('change', toggleFields);
    toggleFields(); // Initialize fields based on the current selection
});
