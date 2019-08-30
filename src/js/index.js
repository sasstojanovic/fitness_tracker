require('../sass/style.scss');

var APP_CONFIG = {
    daysToShow: 5,
    oneStepDistance: 0.762,
    oneStepBurnsCal: 0.05,
    oneStepTime: 0.5
}

var utilities = {
    getNumberWithCommas: function (thisNumber) {
        var result = null;
        if (thisNumber) {
            result = thisNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return result;
    },
    getFormatedDate: function (epochValue) {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        var thisDate = new Date(epochValue);
        var thisMonthDay = thisDate.getDate();
        var thisMonthName = monthNames[thisDate.getMonth()];
        var thisYear = thisDate.getFullYear();

        return thisMonthName + " " + thisMonthDay + ", " + thisYear + ".";
    },
    getDayName: function (epochValue, isShortName) {
        var thisDate = new Date(epochValue);
        const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var dayName = weekdays[thisDate.getDay()];

        if (isShortName) {

        }

        return dayName;
    }
}

var dataStorage = {};

var views = {
    week: {
        name: "week",
        className: "week-review",
        isCurrent: true
    },
    day: {
        name: "day",
        className: "day-review",
        isCurrent: false
    }
}

function showLoader() {
    document.getElementById("loader").classList.remove("hidden");
}

function hideLoader() {
    document.getElementById("loader").classList.add("hidden");
}

function getCurrentViewName() {
    var viewName = null;

    for (prop in views) {
        if (views[prop].isCurrent) {
            viewName = views[prop].name;
            break;
        }
    }

    return viewName;
}

function changeView(view) {
    var currentViewName = getCurrentViewName();

    function setView() {
        for (prop in views) {
            var className = views[prop].className;
            views[prop].isCurrent = false;
            var dayReviewElements = document.getElementsByClassName(className);

            for (let i = 0; i < dayReviewElements.length; i++) {
                dayReviewElements.item(i).classList.add("hidden");
            }
        }

        view.isCurrent = true;
        let weekReviewElements = document.getElementsByClassName(view.className);

        for (let i = 0; i < weekReviewElements.length; i++) {
            weekReviewElements.item(i).classList.remove("hidden");
        }
    }

    if (currentViewName) {
        if (currentViewName != view.name) {
            setView();
        }
    } else {
        setView();
    }
}

function resetSelectedDay() {
    var daysElements = document.querySelectorAll("#days-container .one-day-container .one-day-content");

    daysElements.forEach(function (thisItem) {
        thisItem.classList.remove("active");
    });
}

var eventListeners = {
    backToWeekReview: function () {
        console.log("backToWeekReview");
        resetSelectedDay();
        changeView(views.week);
    },
    goToDayReview: function (e) {
        console.log("goToDayReview");
        if (e.target) {
            if (e.target.classList.contains("one-day-content")) {
                var selectedDate = e.target.dataset.date;

                if (e.target.classList.contains("active")) {
                    return;
                } else {
                    showLoader();
                    resetSelectedDay();
                    e.target.classList.add("active");
                    console.log("Class name: " + e.target.className);
                    changeView(views.day);
                    setDayReview(selectedDate);
                }
            }
        }
    }
}

function initEvents() {
    document.querySelectorAll("#day-review-header .header-back")[0].addEventListener("click", eventListeners.backToWeekReview);
    document.getElementById("days-container").addEventListener('click', eventListeners.goToDayReview);
}

function setDayReview(selectedDate) {
    var thisDaySteps = dataStorage[selectedDate].steps;
    var thisDayKm = (thisDaySteps * APP_CONFIG.oneStepDistance / 1000).toFixed(1);
    var thisDayCaloriesBurned = Math.floor(thisDaySteps * APP_CONFIG.oneStepBurnsCal);
    var thisDayActiveTime = thisDaySteps * APP_CONFIG.oneStepTime / 3600;

    document.getElementById("day-steps-value").innerHTML = utilities.getNumberWithCommas(thisDaySteps);
    document.getElementById("day-review-distance-value").innerHTML = thisDayKm;
    document.getElementById("day-review-calories-value").innerHTML = thisDayCaloriesBurned;
    document.getElementById("day-review-time-value").innerHTML = parseFloat(Math.round(thisDayActiveTime * 100) / 100).toFixed(2);
    document.getElementById("day-review-date").innerHTML = utilities.getFormatedDate(dataStorage[selectedDate].epochDate);
    document.getElementById("day-review-week-day-name").innerHTML = utilities.getDayName(dataStorage[selectedDate].epochDate);
    hideLoader();
}

function setWeekReview(sortedDays) {
    var totalSteps = 0;
    var totalSeconds = 0;
    var totalCalories = 0;

    for (var i = 0; i < sortedDays.length; i++) {
        totalSteps += dataStorage[sortedDays[i]].steps;
    }

    totalSeconds = totalSteps * APP_CONFIG.oneStepTime / APP_CONFIG.daysToShow;
    var hours = Math.floor(totalSeconds / 3600);
    var minutes = Math.floor(totalSeconds % 3600 / 60);
    totalCalories = Math.floor(totalSteps * APP_CONFIG.oneStepBurnsCal);

    document.getElementById("activity-value").innerHTML = hours + "h" + "&nbsp;" + minutes + "min";
    document.querySelectorAll("#steps-container .action-value")[0].innerHTML = utilities.getNumberWithCommas(totalSteps);
    document.querySelectorAll("#calories-container .action-value")[0].innerHTML = totalCalories.toString();

    hideLoader();
}

function fillDaysContainer() {
    var daysContainerElement = document.getElementById("days-container");
    var sortedDays = Object.keys(dataStorage).sort(function (a, b) { return dataStorage[b].epochDate - dataStorage[a].epochDate });
    sortedDays.splice(APP_CONFIG.daysToShow, sortedDays.length - 1);

    for (let i = sortedDays.length - 1; i >= 0; i--) {
        var oneDayContainerElement = document.createElement("DIV");
        oneDayContainerElement.className = "one-day-container";
        var oneDayContentElement = document.createElement("DIV");
        oneDayContentElement.className = "one-day-content";
        oneDayContentElement.dataset.date = dataStorage[sortedDays[i]].epochDate;
        oneDayContentElement.innerHTML = dataStorage[sortedDays[i]].date + "<br>" + dataStorage[sortedDays[i]].day.toUpperCase();
        oneDayContainerElement.appendChild(oneDayContentElement);
        daysContainerElement.appendChild(oneDayContainerElement);
    }

    setWeekReview(sortedDays);
}

function getData(url, successFunction, faultFunction) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            successFunction(data);
        } else {

        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function processData(data) {
    var weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    if (data) {
        for (var i = 0; i < data.length; i++) {
            var dayEpoch = null;
            var steps = null;
            var thisDay = null;
            var thisDate = null;

            if (data[i].timestamp) {
                var currentDate = new Date(data[i].timestamp);
                thisDate = currentDate.getDate();
                thisDay = weekdays[currentDate.getDay()];
                currentDate = currentDate.setHours(0, 0, 0, 0);
                dayEpoch = String(currentDate.valueOf());
            }

            if (data[i].steps) {
                steps = data[i].steps;
            }

            if (dataStorage.hasOwnProperty(dayEpoch)) {
                dataStorage[dayEpoch].steps += steps;
            } else {
                dataStorage[dayEpoch] = {
                    "epochDate": Number(dayEpoch),
                    "steps": steps,
                    "date": thisDate,
                    "day": thisDay
                }
            }
        }
        // console.log("Data: " + JSON.stringify(dataStorage, null, 4));
    }
    fillDaysContainer();
}

function errorFunction() {

}

function onPageLoad() {
    showLoader();
    var url = "https://api.myjson.com/bins/1gwnal";
    initEvents();
    getData(url, processData, errorFunction);
}

onPageLoad();