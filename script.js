let hr = (min = sec = ms = "0" + 0);
let startTimer;

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");

const start = () => {
  startTimer = setInterval(() => {
    ms++;
    ms = ms < 10 ? "0" + ms : ms;

    if (ms == 100) {
      sec++;
      sec = sec < 10 ? "0" + sec : sec;

      ms = "0" + 0;
      console.log(sec);
    }

    if (sec == 60) {
      min++;
      min = min < 10 ? "0" + min : min;
      sec = "0" + 0;
    }

    if (min == 60) {
      hr++;
      hr = hr < 10 ? "0" + hr : hr;
      min = "0" + 0;
    }

    putValue();
  }, 10); // 1000ms = ls
};

const stop = () => {
  clearInterval(startTimer);
};

const reset = () => {
  clearInterval(startTimer);
  hr = min = sec = ms = "0" + 0;
  putValue();
};

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

function putValue() {
  document.querySelector(".miliSecond").innerText = ms;
  document.querySelector(".second").innerText = sec;
  document.querySelector(".minute").innerText = min;
  document.querySelector(".hour").innerText = hr;
}
