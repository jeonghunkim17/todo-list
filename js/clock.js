const today = document.querySelector(".today");
const time = document.querySelector(".time");

function getClock() {
  const date = new Date(); // getClock date setting value

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  time.innerText = `${hours}:${minutes}:${seconds}`;

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const dayOfTheWeek = date.getDay();
  const weekDay = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  today.innerText = `${day}  ${month}  ${weekDay[dayOfTheWeek]}`;
}

getClock();
setInterval(getClock, 1000);
