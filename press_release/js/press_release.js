document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality
    var modal = document.getElementById('myModal');
    var closeBtn = document.querySelector('.close');

    document.querySelector('.s_filter').addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});