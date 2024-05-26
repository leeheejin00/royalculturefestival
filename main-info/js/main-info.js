document.addEventListener('DOMContentLoaded', function() {

    // 좌우 슬라이드

    const slideLeftContainer = document.querySelector('.slideLeft');
    const slideRightContainer = document.querySelector('.slideRight');

    function createCloneAndAppend(container) {
        const firstChild = container.children[0];
        const clone = firstChild.cloneNode(true);
        container.appendChild(clone);
        firstChild.remove();
    }

    function startSlideAnimation(container, interval) {
        setInterval(() => {
            createCloneAndAppend(container);
        }, interval);
    }

    const slideInterval = 5000; // 5 seconds

    startSlideAnimation(slideLeftContainer, slideInterval);
    startSlideAnimation(slideRightContainer, slideInterval);

    
    // 연혁 연도 클릭시 포스터 변경
    const yearElements = document.querySelectorAll('.year-arr .year');
    const posterImg = document.getElementById('poster-img');

    yearElements.forEach(year => {
        year.addEventListener('click', function() {
            const imgFile = year.getAttribute('data-img');
            posterImg.src = `./images/${imgFile}`;
        });
    });


    // 만드는 사람들 슬라이드
    const logoImages = document.querySelectorAll('.logo-img');
    const services = document.querySelectorAll('.survice, .service2, .service3');

    logoImages.forEach((img, index) => {
        img.addEventListener('click', function() {
            services.forEach((service, idx) => {
                if (index === idx) {
                    service.classList.toggle('visible');
                } else {
                    service.classList.remove('visible');
                }
            });
        });
    });
});
