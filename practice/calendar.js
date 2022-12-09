/* 달력만들기 */
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth()+1;

function current_time() {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var ampm;

    now = null;

    if (hour >= 12) {
        ampm = "PM";
    } else {
        ampm = "AM";
    }

    hour = (hour==0) ? 12 : hour;

    if (minute < 10) {
        minute = "0" + minute;
    }
    return hour + ":" + minute + ampm;
}

// 윤달아..!
function Calendar(Month, Year) {
    var now = new Date();
    firstDay = new Date(Year, Month, 1);
    startday = firstDay.getDay();

    if ((Year % 4 == 0) && (Year % 100 != 0) || (Year % 400 == 0)) {

    }
}


Week = new Array("일", "월", "화", "수", "목", "금", "토");
document.write("<table align=center border=1 width=60% height=100pt>");
document.write("<tr><th colspan=7 align=center>" + year + "년 " + month + "월</th><tr>");

document.write("<tr bgcolor=yellow>")
for (i=0; i<Week.length; i++) {
    document.write("<td align=center>"
        + Week[i] + "</td>");
}
document.write("</tr>");
document.write("</table>");