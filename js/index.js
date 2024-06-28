const images = document.querySelectorAll('.mo-palace-box1, .mo-palace-box2, .mo-palace-box3, .mo-palace-box4, .mo-palace-box5, .mo-palace-box6');
                const texts = document.querySelectorAll('.palace-slide1, .palace-slide2, .palace-slide3, .palace-slide4, .palace-slide5, .palace-slide6');
                
                let currentSlide = 0;
                const slideInterval1 = 2000; // 2초 간격
                let interval;
            
                function showSlide1(index) {
                    images.forEach(img => img.style.display = 'none');
                    texts.forEach(text => text.style.display = 'none');

                    images[index].style.display = 'block';
                    texts[index].style.display = 'block';
                }
            
                function nextSlide1() {
                    currentSlide = (currentSlide + 1) % images.length;
                    showSlide1(currentSlide);
                }
            
                function prevSlide2() {
                    currentSlide = (currentSlide - 1 + images.length) % images.length;
                    showSlide1(currentSlide);
                }
            
                function startSlideShow() {
                    interval = setInterval(nextSlide1, slideInterval1);
                }
            
                function stopSlideShow() {
                    clearInterval(interval);
                }

                showSlide1(currentSlide);
                startSlideShow();

                images.forEach(img => {
                    img.addEventListener('mouseover', stopSlideShow);
                    img.addEventListener('mouseout', startSlideShow);
                });
            
                texts.forEach(text => {
                    text.addEventListener('mouseover', stopSlideShow);
                    text.addEventListener('mouseout', startSlideShow);
                });

                document.getElementById('prevSlide2').addEventListener('click', () => {
                    stopSlideShow();
                    prevSlide2();
                    startSlideShow();
                });
            
                document.getElementById('nextSlide1').addEventListener('click', () => {
                    stopSlideShow();
                    nextSlide1();
                    startSlideShow();
                });

                document.addEventListener('DOMContentLoaded', function() {
                    const options = {
                        threshold: 0.5
                    };
    
                    function initObserver() {
                        const observer = new IntersectionObserver((entries, observer) => {
                            entries.forEach(entry => {
                                if (entry.isIntersecting) {
                                    entry.target.classList.add('visible');
                                    observer.unobserve(entry.target);
                                }
                            });
                        }, options);
    
                        
                        const palacTxt1 = document.querySelector('.palace-txt1');
                        const palaceTxt2 = document.querySelector('.palace-txt2');
                  
                        palacTxt1.classList.add('slide-in-left');
                        palaceTxt2.classList.add('slide-in-left');
    
                        observer.observe(palacTxt1);
                        observer.observe(palaceTxt2);
                    }
    
                    function checkScreenSize() {
                        if (window.innerWidth >= 768) {
                            initObserver();
                        }
                    }
    
                    checkScreenSize();
    
                    window.addEventListener('resize', checkScreenSize);
                });