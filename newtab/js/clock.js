function startTime(t, e) {
    var o = "@keyframes " + t + " {";
    o += "0% { transform: rotate(" + e + "rad); }", o += "50% { transform: rotate(" + (e + Math.PI) + "rad); }", o += "100% { transform: rotate(" + (e + 2 * Math.PI) + "rad); }", o += "};", document.querySelector("head").innerHTML += "<style>" + o + "</style>"
}

function convertTimeToRotation() {
    var t = (hours + mins / 60) / 12 * (2 * Math.PI),
        e = (mins + secs / 60) / 60 * (2 * Math.PI),
        o = secs / 60 * (2 * Math.PI);
    startTime("hours", t), startTime("minutes", e), startTime("seconds", o)
}

function getParameterByName(t, e) { e || (e = window.location.href), t = t.replace(/[\[\]]/g, "\\$&"); var o = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(e); return o ? o[2] ? decodeURIComponent(o[2].replace(/\+/g, " ")) : "" : null }
$(document).ready(function() {
    convertTimeToRotation(), setInterval(function() { convertTimeToRotation() }, 9e5)
});
var hourRotation, minRotation, secRotation, now = new Date,
    hours = now.getHours(),
    mins = now.getMinutes(),
    secs = now.getSeconds();
hours = hours > 12 ? hours - 12 : hours;