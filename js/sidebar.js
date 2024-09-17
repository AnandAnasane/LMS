document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.sidebar .nav-link');
    const tabContents = document.querySelectorAll('.tab-content');
    const collapses = document.querySelectorAll('.collapse');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove 'active' class from all tab contents
            tabContents.forEach(content => content.classList.remove('active'));

            // Remove 'active' class from all sidebar links
            navLinks.forEach(item => item.classList.remove('active'));

            // Show the clicked tab's content
            const target = this.getAttribute('data-target');
            if (target) {
                document.getElementById(target).classList.add('active');
            }

            // Set the clicked sidebar link as 'active'
            this.classList.add('active');

            // Collapse all other dropdowns
            collapses.forEach(collapse => {
                if (collapse.id !== this.getAttribute('aria-controls')) {
                    const bsCollapse = new bootstrap.Collapse(collapse, { toggle: false });
                    bsCollapse.hide();
                }
            });
        });
    });
});
