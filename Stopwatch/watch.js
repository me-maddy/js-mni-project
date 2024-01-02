window.onload = () => {
  const start = document.querySelector(".start-btn");
  const minutes = document.querySelector(".minutes");
  const seconds = document.querySelector(".seconds");
  const tens = document.querySelector(".tens");
  const stop = document.querySelector(".stop-btn");
  const reset = document.querySelector(".reset-btn");
  let interval;

  let minute = 0;
  let second = 0;
  let ten = 0;

  start.onclick = () => {
    clearInterval(interval);
    interval = setInterval(showTime, 10);
  };

  stop.onclick = () => {
    clearInterval(interval);
  };

  reset.onclick = () => {
    seconds.innerHTML = "00";
    tens.innerHTML = "00";
    minutes.innerHTML = "00";
    minute = 0;
    second = 0;
    ten = 0;
    clearInterval(interval);
  };

  const showTime = () => {
    ten++;
    if (ten < 10) {
      tens.innerHTML = "0" + ten;
    } else if (ten < 100) {
      tens.innerHTML = ten;
    } else {
      ten = 0;
      tens.innerHTML = "00";
      second++;
    }

    if (second < 10) {
      seconds.innerHTML = "0" + second;
    } else if (second < 60) {
      seconds.innerHTML = second;
    } else {
      second = 0;
      seconds.innerHTML = "00";
      minute++;
    }
    if (minute < 10) {
      minutes.innerHTML = "0" + minute;
    } else {
      minutes.innerHTML = minute;
    }
  };
};
