var utilities = {
    getNumberWithCommas: function (thisNumber) {
        var result = null;
        if (thisNumber) {
            result = thisNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return result;
    },
    getFormatedDate: function (epochValue) {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
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
            dayName = dayName.slice(0, 3);
        }

        return dayName;
    }
}

module.exports = {
    execute: utilities
};
