require('../sass/style.scss');
var app = require('./app_config');
var utilities = require('./utilities');
var getData = require('./data_loader');
var spinLoader = require('./spin_loader');

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

    for (var i = 0; i < daysElements.length; i++) {
        daysElements[i].classList.remove("active");
    }
}

function setDayReview(selectedDate) {
    var thisDaySteps = dataStorage[selectedDate].steps;
    var thisDayKm = (thisDaySteps * app.config.oneStepDistance / 1000).toFixed(1);
    var thisDayCaloriesBurned = Math.floor(thisDaySteps * app.config.oneStepBurnsCal);
    var thisDayActiveTime = thisDaySteps * app.config.oneStepTime / 3600;

    document.getElementById("day-steps-value").innerHTML = utilities.execute.getNumberWithCommas(thisDaySteps);
    document.getElementById("day-review-distance-value").innerHTML = thisDayKm;
    document.getElementById("day-review-calories-value").innerHTML = thisDayCaloriesBurned;
    document.getElementById("day-review-time-value").innerHTML = parseFloat(Math.round(thisDayActiveTime * 100) / 100).toFixed(2);
    document.getElementById("day-review-date").innerHTML = utilities.execute.getFormatedDate(dataStorage[selectedDate].epochDate);
    document.getElementById("day-review-week-day-name").innerHTML = utilities.execute.getDayName(dataStorage[selectedDate].epochDate);
    document.getElementById("day-review-progress-message").innerHTML = "Very good";
    document.getElementById("day-review-motivation-message").innerHTML = "Keep going!";

    spinLoader.hide();
}

function setWeekReview(sortedDays) {
    var totalSteps = 0;
    var totalSeconds = 0;
    var totalCalories = 0;

    for (var i = 0; i < sortedDays.length; i++) {
        totalSteps += dataStorage[sortedDays[i]].steps;
    }

    totalSeconds = totalSteps * app.config.oneStepTime / app.config.daysToShow;
    var hours = Math.floor(totalSeconds / 3600);
    var minutes = Math.floor(totalSeconds % 3600 / 60);
    totalCalories = Math.floor(totalSteps * app.config.oneStepBurnsCal);

    document.getElementById("activity-value").innerHTML = hours + "h" + "&nbsp;" + minutes + "min";
    document.querySelectorAll("#steps-container .action-value")[0].innerHTML = utilities.execute.getNumberWithCommas(totalSteps);
    document.querySelectorAll("#calories-container .action-value")[0].innerHTML = totalCalories.toString();

    spinLoader.hide();
}

function fillDaysContainer() {
    var daysContainerElement = document.getElementById("days-container");
    var sortedDays = Object.keys(dataStorage).sort(function (a, b) { return dataStorage[b].epochDate - dataStorage[a].epochDate });
    sortedDays.splice(app.config.daysToShow, sortedDays.length - 1);

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

function processData(data) {
    if (data) {
        for (var i = 0; i < data.length; i++) {
            var dayEpoch = null;
            var steps = null;
            var thisDay = null;
            var thisDate = null;

            if (data[i].timestamp) {
                var currentDate = new Date(data[i].timestamp);
                thisDate = currentDate.getDate();
                thisDay = utilities.execute.getDayName(currentDate.getDay(), true);
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

var eventListeners = {
    backToWeekReview: function () {
        resetSelectedDay();
        changeView(views.week);
    },
    goToDayReview: function (e) {
        if (e.target) {
            if (e.target.classList.contains("one-day-content")) {
                var selectedDate = e.target.dataset.date;

                if (e.target.classList.contains("active")) {
                    return;
                } else {
                    spinLoader.show();
                    resetSelectedDay();
                    e.target.classList.add("active");
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

function errorFunction() {
    spinLoader.hide();
    alert("A problem occurred while getting data.");
}

function onPageLoad() {
    spinLoader.show();
    initEvents();
    getData.execute(app.config.jsonUrl, processData, errorFunction);
}

window.onload = onPageLoad;