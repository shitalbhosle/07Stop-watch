const h1 = document.getElementById("time");
const startBtn = document.getElementById("start");

let timeoutId = null;

let hr = 0,
  min = 0,
  sec = 0;

function start(flag) {
  if (flag) {
    startBtn.disabled = true;
  }
  timeoutId = setTimeout(function () {
    hr = Number(hr);
    min = Number(min);
    sec = Number(sec);

    sec++;
    if (sec == 60) {
      min++;
      sec = 0;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (hr < 10) {
      hr = "0" + hr;
    }
    if (min == 60) {
      hr++;
      min = 0;
    }
    start();
    h1.innerHTML = hr + ":" + min + ":" + sec;
  }, 1000);
}
function stop() {
  clearTimeout(timeoutId);
  startBtn.disabled = false;
}
function reset() {
  sec = "00";
  min = "00";
  hr = "00";

  h1.innerHTML = hr + ":" + min + ":" + sec;
  clearTimeout(timeoutId);
  startBtn.disabled = false;
}
