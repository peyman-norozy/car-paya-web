import {toast} from "react-toastify";
import moment from "jalali-moment";


function error(errorNotification) {
    toast.error(errorNotification, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}

function success(errorNotification) {
    toast.success(errorNotification, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}

function forceOnlyNumberInput(event) {
    let updatedValue = event.target.value;
    if (Number.isNaN(+event.target.value) === true) {
        updatedValue = updatedValue.slice(0, -1);
        return (event.target.value = updatedValue);
    }
    if (
        event.target.getAttribute("plaqueid") === "Plaque" &&
        +event.target.value === 0
    ) {
        updatedValue = updatedValue.slice(0, -1);
        return (event.target.value = updatedValue);
    }
}

function numberWithCommas(x) {
    x = x.toString();
    const pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
    return x;
}

function timestampToPersianDate(timeStamp) {
    const date = new Date(timeStamp);
    const weekDay = date.toLocaleDateString("fa-IR", {weekday: "long"});
    const monthDay = date.toLocaleDateString("fa-IR", {day: "numeric"});
    const year = date.toLocaleDateString("fa-IR", {year: "numeric"});
    const monthName = date.toLocaleDateString("fa-IR", {month: "long"});

    const dateString = `${weekDay} ${monthDay} ${monthName} ${year}`;
    console.log(dateString);
    return dateString;
}

function timeStampToTime(timeStamp) {
    const date = new Date(timeStamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const time = `${hours}:${minutes}:${seconds}`;
    return time;
}
function persianDateCovertor(timeStamp) {
    moment.locale("fa");
  
    return moment.unix(timeStamp).format("L");
  }

export {
    error,
    success,
    forceOnlyNumberInput,
    numberWithCommas,
    timestampToPersianDate,
    timeStampToTime,
    persianDateCovertor
};
