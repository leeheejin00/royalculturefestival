document.addEventListener("DOMContentLoaded", function() {
    // 로그인 및 회원가입 창

    var loginToggle = document.getElementById('login-toggle');
    var mobileLoginToggle = document.getElementById('mobile-login-toggle'); // 모바일 로그인 버튼
    var modalOverlay = document.querySelector('.modal-overlay');
    var modalForm = document.querySelector('.form');

    function showModal(e) {
    e.preventDefault(); // 기본 동작 방지
    modalForm.style.display = 'block'; // 폼을 보이게 함
    modalOverlay.style.display = 'block'; // 배경을 보이게 함
    }

    loginToggle.addEventListener('click', showModal);
    mobileLoginToggle.addEventListener('click', showModal); // 모바일 로그인 버튼 클릭 이벤트 추가


    // 로그인 토글 버튼 클릭 이벤트
    loginToggle.addEventListener('click', function(e) {
    e.preventDefault(); // 기본 동작 방지
    modalForm.style.display = 'block'; // 폼을 보이게 함
    modalOverlay.style.display = 'block'; // 배경을 보이게 함
    });

    // 모달 오버레이 클릭 이벤트
    modalOverlay.addEventListener('click', function() {
    this.style.display = 'none'; // 배경을 숨김
    modalForm.style.display = 'none'; // 폼을 숨김
    });

    // Find all input and textarea elements inside the form
    var inputs = document.querySelectorAll('.form input, .form textarea');

    // Attach event listeners for keyup, blur, and focus events
    inputs.forEach(function(input) {
    input.addEventListener('keyup', handleEvent);
    input.addEventListener('blur', handleEvent);
    input.addEventListener('focus', handleEvent);
    });

    function handleEvent(e) {
        var input = e.target;
        var label = input.previousElementSibling;

        if (e.type === 'keyup') {
            if (input.value === '') {
                label.classList.remove('active', 'highlight');
            } else {
                label.classList.add('active', 'highlight');
            }
        } else if (e.type === 'blur') {
            if (input.value === '') {
                label.classList.remove('active', 'highlight');
            } else {
                label.classList.remove('highlight');
            }
        } else if (e.type === 'focus') {
            if (input.value === '') {
                label.classList.remove('highlight');
            } else {
                label.classList.add('highlight');
            }
        }
    }

    // 탭 메커니즘 구현
    document.querySelectorAll('.tab a').forEach(function(tab) {
        tab.addEventListener('click', function(e) {
            e.preventDefault();

            var parent = this.parentElement;
            parent.classList.add('active');
            Array.from(parent.parentElement.children).forEach(function(sibling) {
            if (sibling !== parent) {
                sibling.classList.remove('active');
            }
            });

            var target = this.getAttribute('href');
            document.querySelectorAll('.tab-content > div').forEach(function(div) {
            if (div !== document.querySelector(target)) {
                div.style.display = 'none';
            }
            });

            document.querySelector(target).style.display = 'block';
            modalOverlay.style.display = 'block'; // 배경을 보이게 함
        });
    });
});
