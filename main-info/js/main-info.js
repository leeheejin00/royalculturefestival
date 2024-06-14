document.addEventListener('DOMContentLoaded', function() {
    
    // 연혁 연도 클릭시 포스터 변경
    const yearElements = document.querySelectorAll('.year-arr .year');
    const posterImg = document.getElementById('poster-img');
    const numFestiElement = document.querySelector('.num-festi2023 strong');
    
    // 각 연도에 해당하는 궁중문화축전 횟수
    const festiNumbers = {
        2017: '제2회 궁중문화축전',
        2018: '제3회 궁중문화축전',
        2019: '제4회 궁중문화축전',
        2020: '제5회 궁중문화축전',
        2021: '제6회 궁중문화축전',
        2022: '제7회 궁중문화축전',
        2023: '제8회 궁중문화축전'
    };

    yearElements.forEach(year => {
        year.addEventListener('click', function() {
            const imgFile = year.getAttribute('data-img');
            posterImg.src = `./images/${imgFile}`;

            const yearValue = year.textContent;
            numFestiElement.innerHTML = festiNumbers[yearValue].replace(' ', '<br>');
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

window.onload = function() {
  const toggleBtn = document.querySelector('.menu-toggle-btn');
  const sideMenu = document.getElementById('side-menu');

  toggleBtn.addEventListener('click', function() {
       if (sideMenu.style.right === '0px') {
          sideMenu.style.right = '-250px'; 
          toggleBtn.classList.remove('open'); 
      } else {
          sideMenu.style.right = '0'; 
          toggleBtn.classList.add('open'); 
      }
  });
};

// id="login-toggle"