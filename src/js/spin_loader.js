function show() {
    document.getElementById("loader").classList.remove("hidden");
}

function hide() {
    document.getElementById("loader").classList.add("hidden");
}

module.exports = {
    show: show,
    hide: hide
};