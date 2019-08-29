require('../sass/style.scss');

var APP_CONFIG = {
    daysToShow: 5,
    oneStepDistance: 0.762,
    oneStepBurnsCal: 0.05,
    oneStepTime: 0.5
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

var eventListeners = {
    backToWeekReview: function () {
        console.log("backToWeekReview");
        changeView(views.week);
    },
    goToDayReview: function (e) {
        console.log("goToDayReview");
        if (e.target) {
            if (e.target.classList.contains("one-day-content")) {
                //TODO
                console.log("Class name: " + e.target.className);
                changeView(views.day);
                /*
                document.getElementsByClassName("week-review").display = "none";
                document.getElementsByClassName("day-review").display = "block";
                */
            }
        }
    }
}

function initEvents() {
    document.querySelectorAll("#day-review-header .header-back")[0].addEventListener("click", eventListeners.backToWeekReview);
    document.getElementById("days-container").addEventListener('click', eventListeners.goToDayReview);
}

function setWeekAverageActivity(sortedDays) {
    var totalSteps = 0;
    var totalSeconds = 0;
    var totalCalories = 0;

    for (var i = 0; i < sortedDays.length; i++) {
        totalSteps += dataStorage[sortedDays[i]].steps;
    }

    totalSeconds = totalSteps * APP_CONFIG.oneStepTime;
    var hours = Math.floor(totalSeconds / 3600);
    var minutes = Math.floor(totalSeconds % 3600 / 60);
    totalCalories = Math.floor(totalSteps * APP_CONFIG.oneStepBurnsCal);

    document.getElementById("activity-value").innerHTML = hours + "h" + "&nbsp;" + minutes + "min";
    document.querySelectorAll("#steps-container .action-value")[0].innerHTML = totalSteps.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.querySelectorAll("#calories-container .action-value")[0].innerHTML = totalCalories.toString();
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

    setWeekAverageActivity(sortedDays);
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
        console.log("Data: " + JSON.stringify(dataStorage, null, 4));
    }

    fillDaysContainer();
}

function errorFunction() {

}

function onPageLoad() {
    var url = "https://api.myjson.com/bins/1gwnal";
    initEvents();
    getData(url, processData, errorFunction);
}

onPageLoad();