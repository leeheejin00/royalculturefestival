document.addEventListener("DOMContentLoaded", () => {
    let currentYear = 2024; // 현재 연도
    let currentMonth = 3; // 현재 월 (0부터 시작)
    
    function createCalendar(year, month) {
    const today = new Date(); // 오늘 날짜 가져오기
    const todayDate = today.getDate();
    
    const startDate = new Date(year, month, 1);
    const endDate = new Date(year, month + 1, 0);
    
    const daysInMonth = endDate.getDate();
    const startingDay = startDate.getDay();
    
    const calendar = document.getElementById("calendar");
    calendar.innerHTML = "";
    
    const table = document.createElement("table");
    const header = document.createElement("tr");
    
    const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
    
    for (let day of weekdays) {
        const th = document.createElement("th");
        th.textContent = day;
        header.appendChild(th);
    }
    
    table.appendChild(header);
    
    let date = 1;
    
    for (let i = 0; i < 6; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 7; j++) {
        if (i === 0 && j < startingDay) {
            const td = document.createElement("td");
            row.appendChild(td);
        } else if (date > daysInMonth) {
            break;
        } else {
            const td = document.createElement("td");
            td.textContent = date;
            if (year === today.getFullYear() && month === today.getMonth() && date === todayDate) {
            td.classList.add('today'); // 오늘 날짜에 클래스 추가
            }
            row.appendChild(td);
            date++;
        }
        }
        table.appendChild(row);
    }
    
    calendar.appendChild(table);
    }

    // 선택한 날짜에 배경색 설정하는 함수
    function selectDate(element) {
    const selectedDate = parseInt(element.textContent); // 선택한 날짜 가져오기
    const allDates = document.querySelectorAll('#calendar td'); // 달력의 모든 날짜 가져오기

    // 모든 날짜에 있는 selected 클래스 제거
    allDates.forEach(date => {
        date.classList.remove('selected');
    });

    // 선택한 날짜에 selected 클래스 추가
    element.classList.add('selected');
    }

    // 달력 생성 함수 안에 각 날짜에 클릭 이벤트 추가
    function addClickEventToDates() {
    for (let dayElement of document.querySelectorAll('#calendar td')) {
        dayElement.addEventListener('click', function() {
        selectDate(this);
        });
    }
    }

    createCalendar(currentYear, currentMonth); // 달력 생성 (현재 연도, 현재 월)
    addClickEventToDates();

    // 이전 달로 이동하는 함수
    function prevMonth() {
    currentMonth--; // 현재 월을 감소시킴
    if (currentMonth < 0) { // 현재 월이 0(1월)보다 작으면
        currentMonth = 11; // 이전 연도의 12월로 설정
        currentYear--;
    }
    createCalendar(currentYear, currentMonth); // 새로운 달력 생성
    document.querySelector('#calendar-month').innerText = `${currentYear}년 ${currentMonth +1}월`;
    addClickEventToDates(); // 클릭 이벤트 다시 추가
    }

    // 다음 달로 이동하는 함수
    function nextMonth() {
    currentMonth++; // 현재 월을 증가시킴
    if (currentMonth > 11) { // 현재 월이 11(12월)을 넘어가면
        currentMonth = 0; // 다음 연도의 1월로 설정
        currentYear++;
    }
    createCalendar(currentYear, currentMonth); // 새로운 달력 생성
    document.querySelector('#calendar-month').innerText = `${currentYear}년 ${currentMonth +1}월`;
    addClickEventToDates(); // 클릭 이벤트 다시 추가
    }
})

