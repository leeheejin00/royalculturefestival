document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.getElementById('searchIcon');
    const searchInput = document.getElementById('searchInput');

    searchIcon.addEventListener('click', function() {
        const query = searchInput.value;
        if (query === '경복궁') {
            window.location.href = '../index_search/index_search.html';
        } else {
            alert('Please enter "경복궁" to search.');
        }
    });

    var searchIcon1 = document.getElementById("searchIcon");
    var searchInput1 = document.getElementById("searchInput");

    searchIcon1.addEventListener("click", function(event) {
        event.preventDefault();
        if (searchInput1.style.display === "none" || searchInput1.style.display === "") {
            searchInput1.style.display = "block";
            searchInput1.focus();
        } else {
            searchInput1.style.display = "none";
        }
    });

    document.addEventListener("click", function(event) {
        if (!searchInput1.contains(event.target) && !searchIcon1.contains(event.target)) {
            searchInput1.style.display = "none";
        }
    });

    const menuItems = document.querySelectorAll('.gnb > li > a');
    const header = document.querySelector('header');

    menuItems.forEach(item => {
        item.addEventListener('mouseover', function (e) {
            e.preventDefault();
            const submenu = this.nextElementSibling;
            let allSubmenus = document.querySelectorAll('.submenu');

            // Close all submenus except the current one
            allSubmenus.forEach(sub => {
                if (sub !== submenu) {
                    sub.classList.remove('open');
                    sub.style.maxHeight = null;
                }
            });

            // Toggle the clicked submenu
            if (submenu && submenu.classList.contains('submenu')) {
                submenu.classList.toggle('open');
                if (submenu.classList.contains('open')) {
                    submenu.style.maxHeight = submenu.scrollHeight + "px";
                } else {
                    submenu.style.maxHeight = null;
                }

                // Adjust header height
                setTimeout(() => {
                    let totalHeight = 180; 
                    allSubmenus.forEach(sub => {
                        if (sub.classList.contains('open')) {
                            totalHeight += sub.scrollHeight;
                        }
                    });
                    header.style.height = totalHeight + "px";
                }, 300); 
            }
        });
    });
});

document.getElementById('languageIcon').addEventListener('click', function(event) {
    event.preventDefault();
    var languageSelect = document.getElementById('languageSelect');
    if (languageSelect.style.display === 'none' || languageSelect.style.display === '') {
        languageSelect.style.display = 'block';
    } else {
        languageSelect.style.display = 'none';
    }
});


function submitForm() {
    document.querySelector('form').submit();
}

function validateSearch() {
    const searchInput = document.getElementById('find').value.trim();
    if (searchInput === '') {
        alert('검색어를 입력하세요.');
        return false;
    }
    return true;
}


window.onload = function() {
    const toggleBtn = document.querySelector('.menu-toggle-btn');
    const sideMenu = document.getElementById('side-menu');
    const closeBtn = document.querySelector('.close-btn');

    toggleBtn.addEventListener('click', function() {
        if (sideMenu.style.right === '0px') {
            sideMenu.style.right = '-50%'; 
            toggleBtn.classList.remove('open'); 
        } else {
            sideMenu.style.right = '0'; 
            toggleBtn.classList.add('open'); 
        }
    });

    closeBtn.addEventListener('click', function() {
        sideMenu.style.right = '-50%'; 
        toggleBtn.classList.remove('open'); 
    });
};