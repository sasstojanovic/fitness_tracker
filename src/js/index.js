require('../sass/style.scss');

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







function onPageLoad() {
    initEvents();
}

onPageLoad();