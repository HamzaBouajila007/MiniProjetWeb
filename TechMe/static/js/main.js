let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let newyear = new Date("Jan 1,2023 00:00:00").getTime();
updatefun();
function updatefun() {
  let now = new Date().getTime();
  let downtime = newyear - now;

  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;

  let d = Math.floor(downtime / day);
  let h = Math.floor((downtime % day) / hour);
  let m = Math.floor((downtime % hour) / minute);
  let s = Math.floor((downtime % minute) / second);

  days.innerHTML = d;
  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;

  setTimeout(updatefun, 1000);
}
