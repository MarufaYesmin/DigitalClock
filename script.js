const timeElement = document.querySelector("#time");
const periodElement = document.querySelector("#period");

const dayElement = document.querySelector("#day");
const dateElement = document.querySelector("#date");

function updateClock() {

    const now = new Date();

    let hours = now.getHours();

    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const period = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    const formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

    timeElement.textContent = formattedTime;

    periodElement.textContent = period;

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    const currentDay = days[now.getDay()];

    const currentDate = now.getDate();

    const currentMonth = months[now.getMonth()];

    const currentYear = now.getFullYear();

    dayElement.textContent = currentDay;

    dateElement.textContent = `${currentDate} ${currentMonth} ${currentYear}`;

}

updateClock();

setInterval(updateClock, 1000);
