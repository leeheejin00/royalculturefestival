document.addEventListener("DOMContentLoaded", function() {
    const frm = document.querySelector("#login-form");
    frm.addEventListener("submit", function(e) {
        e.preventDefault();
        const formData = new FormData(frm);
        const myData = new URLSearchParams(formData).toString();

        fetch(frm.action, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: myData
        })
        .then(response => response.text())
        .then(res => {
            console.log('Server Response:', res);  // 실제 서버 응답 확인
            if (res.trim()) {  // 응답이 비어있지 않은지 확인
                try {
                    const jsonData = JSON.parse(res);
                    console.log(jsonData);
                    const message = `${jsonData.user_name} (${jsonData["login-email"]})님 반갑습니다`;
                    document.querySelector("#login").innerHTML = message;
                } catch (e) {
                    console.error("Invalid JSON response:", res, e);
                    alert("응답을 처리하는 중에 오류가 발생했습니다.");
                }
            } else {
                alert("서버로부터 응답이 없습니다.");
            }
        })
        .catch(err => {
            console.error('통신 실패:', err);
            alert("서버와 통신하는 중에 오류가 발생했습니다.");
        });
    });
});
