document.addEventListener('DOMContentLoaded', function() {

    
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

function slideLeft() {
    let slideLeft = document.getElementById('slideLeft');
    slideLeft.style.transition = 'transform 1s';
    slideLeft.style.transform = 'translateX(-500px)';
    setTimeout(function() {
        slideLeft.appendChild(slideLeft.querySelector('li:first-child'));
        slideLeft.style.transition = 'none';
        slideLeft.style.transform = 'translateX(0)';
    }, 1000);
}

function slideRight() {
    let slideRight = document.getElementById('slideRight');
    slideRight.style.transition = 'transform 1s';
    slideRight.style.transform = 'translateX(500px)';
    setTimeout(function() {
        slideRight.insertBefore(slideRight.querySelector('li:last-child'), slideRight.querySelector('li:first-child'));
        slideRight.style.transition = 'none';
        slideRight.style.transform = 'translateX(0)';
    }, 1000);
}

// 자동 슬라이드 설정
setInterval(slideLeft, 3000); // 3초마다 slideLeft 호출
setInterval(slideRight, 3000); // 3초마다 slideRight 호출