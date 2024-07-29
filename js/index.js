 document.addEventListener('DOMContentLoaded', function() {
        // 검색 기능
        const searchIcon = document.getElementById('searchIcon');
        const searchInput = document.getElementById('searchInput');

        searchIcon.addEventListener('click', function() {
            const query = searchInput.value;
            if (query === '경복궁') {
                window.location.href = './index_search/index_search.html';
            } else {
                alert('Please enter "경복궁" to search.');
            }
        });

        // 사이드 메뉴 토글
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

        // 언어 선택 메뉴
        const languageIcon = document.getElementById('languageIcon');
        const languageSelect = document.getElementById('languageSelect');

        languageIcon.addEventListener('click', function(event) {
            event.preventDefault();
            if (languageSelect.style.display === 'none' || languageSelect.style.display === '') {
                languageSelect.style.display = 'block';
            } else {
                languageSelect.style.display = 'none';
            }
        });

        // 검색 입력 필드 표시/숨김
        searchIcon.addEventListener("click", function(event) {
            event.preventDefault();
            if (searchInput.style.display === "none" || searchInput.style.display === "") {
                searchInput.style.display = "block";
                searchInput.focus();
            } else {
                searchInput.style.display = "none";
            }
        });

        document.addEventListener("click", function(event) {
            if (!searchInput.contains(event.target) && !searchIcon.contains(event.target)) {
                searchInput.style.display = "none";
            }
        });

        // 메뉴 아이템 호버 효과
        const menuItems = document.querySelectorAll('.gnb > li > a');
        
        menuItems.forEach(item => {
            item.addEventListener('mouseover', function (e) {
                e.preventDefault();
                const submenu = this.nextElementSibling;

                document.querySelectorAll('.submenu').forEach(sub => {
                    if (sub !== submenu) {
                        sub.classList.remove('open');
                        sub.style.maxHeight = null;
                    }
                });

                if (submenu && submenu.classList.contains('submenu')) {
                    submenu.classList.toggle('open');
                    if (submenu.classList.contains('open')) {
                        submenu.style.maxHeight = submenu.scrollHeight + "px";
                    } else {
                        submenu.style.maxHeight = null;
                    }
                }
            });

            item.parentElement.addEventListener('mouseleave', function () {
                const submenu = item.nextElementSibling;
                if (submenu && submenu.classList.contains('submenu')) {
                    submenu.classList.remove('open');
                    submenu.style.maxHeight = null;
                }
            });
        });

        // 인트라넷 아이콘 클릭 이벤트
        document.getElementById('intranet-icon').addEventListener('click', function(event) {
            event.preventDefault();
            var selectMenu = document.getElementById('language-select');
            if (selectMenu.style.display === 'none' || selectMenu.style.display === '') {
                selectMenu.style.display = 'block';
            } else {
                selectMenu.style.display = 'none';
            }
        });

        // 언어 선택 토글
        const toggleLanguageSelect = () => {
            languageSelect.size = languageSelect.size === 1 ? 4 : 1;
        };

        languageIcon.addEventListener('click', (event) => {
            event.preventDefault();
            toggleLanguageSelect();
        });

        languageSelect.addEventListener('blur', () => {
            languageSelect.size = 1;
        });

        // 슬라이드쇼 기능
        const images = document.querySelectorAll('.mo-palace-box1, .mo-palace-box2, .mo-palace-box3, .mo-palace-box4, .mo-palace-box5, .mo-palace-box6');
        const texts = document.querySelectorAll('.palace-slide1, .palace-slide2, .palace-slide3, .palace-slide4, .palace-slide5, .palace-slide6');
        let currentSlide = 0;
        const slideInterval1 = 2000;
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

        // 애니메이션 효과
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

        // 배너 슬라이드
        function auto() {
            $('.banner-box').animate({left: '-80%'}, 500, function() {
                $('.banner-box').append($('.banner-box > div').first()).css({left: '0%'});
            });
        }
        let timer2 = setInterval(auto, 3000);

        function auto2() {
            $('.baner-slide-mo').animate({left: '-80%'}, 500, function() {
                $('.baner-slide-mo').append($('.baner-slide-mo > div').first()).css({left: '0%'});
            });
        }
        let timer4 = setInterval(auto2, 3000);

        // 공지사항 슬라이드
        function moveRight() {
            if ($(window).width() <= 768) {
                $('.notice-flex-box').stop().animate({ left: '-100%' }, 500, function() {
                    $(this).css({ left: '0' }).append($('.notice_box1').removeClass('active').next().addClass('active'));
                    resetActiveClass();
                });
            }
        }

        function moveLeft() {
            if ($(window).width() <= 768) {
                $('.notice-flex-box').stop().animate({ left: '100%' }, 500, function() {
                    $(this).css({ left: '0' }).prepend($('.notice_box3').removeClass('active').prev().addClass('active'));
                    resetActiveClass();
                });
            }
        }

        function resetActiveClass() {
            $('.notice_box1, .notice_box2, .notice_box3').removeClass('active');
            $('.notice_box1').next().addClass('active');
        }

        let timer = setInterval(moveRight, 3000);

        $('.notice-slide-flex').on('mouseover', function() {
            clearInterval(timer);
        });

        $('.notice-slide-flex').on('mouseleave', function() {
            timer = setInterval(moveRight, 3000);
        });

        resetActiveClass();

        $('#left').click(function(e) {
            e.preventDefault();
            moveLeft();
        });

        $('#right').click(function(e) {
            e.preventDefault();
            moveRight();
        });

        // 궁 이미지 전환
        const palaceLinks = document.querySelectorAll('.palace_gnb li a');
        const palaceSections = [
            '.palace-img1',
            '.palace-img2',
            '.palace-img3',
            '.palace-img4',
            '.palace-img5',
            '.palace-img6'
        ];

        function showPalace(index) {
            palaceSections.forEach((selector, i) => {
                const section = document.querySelector(selector);
                if (i === index) {
                    section.style.display = 'grid';
                } else {
                    section.style.display = 'none';
                }
            });
        }

        palaceLinks.forEach((link, index) => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                showPalace(index);
            });
        });

        showPalace(0);

        // 이미지 애니메이션
        const imgObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        const img1 = document.querySelector('.img1');
        const img2 = document.querySelector('.img2');
        const img3 = document.querySelector('.img3');
        const img4 = document.querySelector('.img4');

        img1.classList.add('slide-in-left');
        img2.classList.add('slide-in-right');
        img3.classList.add('slide-in-top');
        img4.classList.add('slide-in-left');

        imgObserver.observe(img1);
        imgObserver.observe(img2);
        imgObserver.observe(img3);
        imgObserver.observe(img4);
    });

    // 사이트맵 네비게이션
    function navigateToSite() {
        var select = document.getElementById('sitemap');
        var url = select.options[select.selectedIndex].value;
        if (url) {
            window.location.href = url;
        }
    }

    // 검색 폼 제출
    function submitForm() {
        document.getElementById("searchForm").submit();
    }

    // 검색 유효성 검사
    function validateSearch() {
        var find = document.getElementById("find").value;
        if (find.trim() === "") {
            alert("검색어를 입력하세요.");
            return false;
        }
        return true;
    }