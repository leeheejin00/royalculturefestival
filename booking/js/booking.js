document.addEventListener("DOMContentLoaded", () => {
    const posters = document.querySelectorAll('.poster li');
    const descriptions = document.querySelectorAll('.program-desc');

    posters.forEach((poster, index) => {
        poster.addEventListener('click', () => {
            // Remove selected class from all posters
            posters.forEach(p => p.classList.remove('selected'));
            // Add selected class to clicked poster
            poster.classList.add('selected');

            // Hide all descriptions
            descriptions.forEach(desc => desc.classList.remove('selected'));
            // Show the description that corresponds to the clicked poster
            document.getElementById(`desc${index + 1}`).classList.add('selected');

            // Reorder the posters for mobile view
            if (window.innerWidth <= 600) {
                posters.forEach(p => p.style.order = '');
                poster.style.order = '2'; // Selected image in the center
                if (poster.previousElementSibling) poster.previousElementSibling.style.order = '1';
                if (poster.nextElementSibling) poster.nextElementSibling.style.order = '3';
            }
        });
    });
});
