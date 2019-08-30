function getData(url, successFunction, faultFunction) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                var data = JSON.parse(this.responseText);
                successFunction(data);
            } else {
                if (faultFunction) {
                    faultFunction();
                }
            }
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

module.exports = {
    execute: getData
};