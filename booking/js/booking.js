document.addEventListener("DOMContentLoaded", () => {
    const posters = document.querySelectorAll('.poster li');
    const descriptions = document.querySelectorAll('.program-desc');
    const slides = document.querySelector('.slide-box').children;

    let currentIndex = 1; // 초기 선택된 인덱스 설정

    function updateVisuals() {
        // 포스터 업데이트
        posters.forEach((poster, index) => {
            poster.classList.remove('visible', 'selected', 'left', 'right');
            if (index === currentIndex - 1 || index === currentIndex || index === currentIndex + 1) {
                poster.classList.add('visible');
                if (index === currentIndex - 1) {
                    poster.classList.add('left');
                } else if (index === currentIndex) {
                    poster.classList.add('selected');
                    descriptions.forEach(desc => desc.classList.remove('selected'));
                    descriptions[currentIndex].classList.add('selected');
                    updateSlideBox();
                } else if (index === currentIndex + 1) {
                    poster.classList.add('right');
                }
            }
        });
    }

    // 슬라이드 박스 업데이트
    function updateSlideBox() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove('selected');
        }
        slides[currentIndex].classList.add('selected');
    }

    updateVisuals(); // 초기 시각적 요소 업데이트

    posters.forEach((poster, index) => {
        poster.addEventListener('click', () => {
            if (index !== currentIndex) {
                currentIndex = index;
                updateVisuals();
            }
        });
    });
});
