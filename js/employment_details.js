//Employment Details Validation

// Basic form validation
(function () {
    'use strict';
    var forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
                // Validate file upload
                const resumeInput = document.getElementById('resume');
                const fileUploadError = document.getElementById('fileUploadError');
                if (resumeInput.files.length === 0) {
                    fileUploadError.style.display = 'block';
                    event.preventDefault();
                } else {
                    fileUploadError.style.display = 'none';
                }
            }, false);
        });
})();

// File upload functionality
const fileUploadArea = document.getElementById('fileUploadArea');
const resumeInput = document.getElementById('resume');
const fileUploadText = document.getElementById('fileUploadText');
const cancelButton = document.getElementById('cancelButton');
const uploadButton = document.getElementById('uploadButton');
const fileUploadError = document.getElementById('fileUploadError');

fileUploadArea.addEventListener('dragover', function (event) {
    event.preventDefault();
    event.stopPropagation();
    this.classList.add('dragover');
});

fileUploadArea.addEventListener('dragleave', function (event) {
    event.preventDefault();
    event.stopPropagation();
    this.classList.remove('dragover');
});

fileUploadArea.addEventListener('drop', function (event) {
    event.preventDefault();
    event.stopPropagation();
    this.classList.remove('dragover');
    resumeInput.files = event.dataTransfer.files;
    updateFileUploadText();
});

function updateFileUploadText() {
    if (resumeInput.files.length > 0) {
        fileUploadText.textContent = resumeInput.files[0].name;
        fileUploadError.style.display = 'none';
    } else {
        fileUploadText.textContent = 'Click or Drag and Drop to Upload';
    }
}

cancelButton.addEventListener('click', function () {
    resumeInput.value = ''; // Clear the file input
    updateFileUploadText();
    fileUploadError.style.display = 'none';
});

uploadButton.addEventListener('click', function () {
    if (resumeInput.files.length > 0) {
        // Handle file upload
        alert('File ready to be uploaded: ' + resumeInput.files[0].name);
    } else {
        alert('No file selected.');
    }
});

resumeInput.addEventListener('change', function () {
    updateFileUploadText();
});
