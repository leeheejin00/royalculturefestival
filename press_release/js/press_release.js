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
    var tabMenu = document.querySelector('.tab_menu');

    document.getElementById('tab-trigger').addEventListener('click', function() {
      tabMenu.style.display = 'block';
    });

    const tabList = document.querySelectorAll('.tab_menu .list li');
    const contents = document.querySelectorAll('.tab_menu .cont_area .cont');
    let activeCont = ''; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)


  for(var i = 0; i < tabList.length; i++){
    tabList[i].querySelector('.btn').addEventListener('click', function(e){
      e.preventDefault();
      for(var j = 0; j < tabList.length; j++){
        // 나머지 버튼 클래스 제거
        tabList[j].classList.remove('is_on');

        // 나머지 컨텐츠 display:none 처리
        contents[j].style.display = 'none';
      }

      // 버튼 관련 이벤트
      this.parentNode.classList.add('is_on');

      // 버튼 클릭시 컨텐츠 전환
      activeCont = this.getAttribute('href');
      document.querySelector(activeCont).style.display = 'block';
    });
}
});

