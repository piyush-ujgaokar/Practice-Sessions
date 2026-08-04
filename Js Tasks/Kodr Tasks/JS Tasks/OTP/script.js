let otpBtn = document.getElementById("otpBtn");
let timer = document.getElementById("timer");

otpBtn.addEventListener("click", function () {

    otpBtn.disabled = true;

    let time = 30;

    timer.innerHTML = "00:" + time;

    let interval = setInterval(function () {

        time--;

        if (time >= 10) {
            timer.innerHTML = "00:" + time;
        } else {
            timer.innerHTML = "00:0" + time;
        }

        if (time == 0) {

            clearInterval(interval);

            timer.innerHTML = "OTP Expired";

            otpBtn.disabled = false;

        }

    }, 1000);

});