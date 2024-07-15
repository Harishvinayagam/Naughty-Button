var cnt = 0;

function move() {
    var user = document.getElementById("uname").value;
    var pass = document.getElementById("pass").value;
    var mail = document.getElementById("mail").value;
    var check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if ((user === "" || pass === "" || !mail.match(check)) && cnt === 0) {
        buttonmoveleft();
        cnt = 1;
    } else if ((user === "" || pass === "" || !mail.match(check)) && cnt === 1) {
        buttonmoveright();
        cnt = 2;
    } else if ((user === "" || pass === "" || !mail.match(check)) && cnt === 2) {
        buttonmoveleft();
        cnt = 1;
    }
}

function buttonmoveleft() {
    const button = document.getElementById("btn");
    button.style.transform = "translateX(180%)";
}

function buttonmoveright() {
    const button = document.getElementById("btn");
    button.style.transform = "translateX(0%)";
}

function resetbtn() {
    const button = document.getElementById("btn");
    button.style.transform = "translateX(0%)";
}
