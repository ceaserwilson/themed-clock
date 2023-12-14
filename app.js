const hourEl = document.querySelector(".hour");
const minEl = document.querySelector(".min");
const secEl = document.querySelector(".sec");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const dayEl = document.querySelector(".circle");
const toggleBtn = document.querySelector(".toggle");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const Months = [
  "Jan",
  "Feb",
  "Mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

const prefersDark = window.matchMedia("(prefers-color-scheme:dark)").matches;

const html = document.querySelector("html");

if (prefersDark) {
  html.classList.add("dark");
  toggleBtn.innerHTML = `Light Mode`;
}

toggleBtn.addEventListener("click", (e) => {
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.currentTarget.innerText = `Dark Mode`;
  } else {
    html.classList.add("dark");
    e.currentTarget.innerText = `Light Mode`;
  }
});

function setTime() {
  const time = new Date();
  const hour = time.getHours();
  const hour12 = hour % 12;
  const Min = time.getMinutes();
  const sec = time.getSeconds();
  const day = time.getDay();
  const date = time.getDate();
  const Month = time.getMonth();

  const AMPM = `${hour > 11 ? "PM" : "AM"}`;

  hourEl.style.transform = ` translate(-50%, -100%) rotate(${hour12 * 30}deg)`;
  minEl.style.transform = ` translate(-50%, -100%) rotate(${Min * 6}deg)`;
  secEl.style.transform = ` translate(-50%, -100%) rotate(${sec * 6}deg)`;

  timeEl.innerHTML = `${hour12}:${Min < 10 ? `0${Min}` : Min} ${AMPM} `;
  dateEl.innerHTML = `${days[day]}, ${Months[Month]} <span class="circle">${date}</span>`;
}

setTime();
setInterval(setTime, 1000);
