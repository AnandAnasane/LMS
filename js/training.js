document.querySelectorAll('#batchDropdown + .dropdown-menu .dropdown-item').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        const selectedText = this.getAttribute('data-value');
        document.getElementById('batchDropdown').textContent = selectedText;
    });
});