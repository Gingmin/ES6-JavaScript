"use strict";

// 하루 남은 초 계산
function getSecondsToTomorrow() {
    let now = new Date();
    let nextDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    let diff = nextDate - now;
    return Math.round(diff / 1000);
}
//console.log(getSecondsToTomorrow());

//상대 날짜 출력하기
function formatDate(date) {
    let diff = new Date() - date;
    if(diff < 1000) {
        return "현재";
    }
    let sec = Math.floor(diff / 1000);
    if(sec < 60) {
        return sec + "초 전";
    }
    let min = Math.floor(diff / 60000);
    if(min < 60) {
        return min + "분 전";
    }
    let d = date;
    d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
    ].map(component => component.slice(-2));

    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}
//console.log( formatDate(new Date(new Date - 1)) );
// console.log(formatDate(new Date(new Date - 1)));
// console.log(formatDate(new Date(new Date - 30 * 1000)));
// console.log(formatDate(new Date(new Date - 5 * 60 * 1000)));
// console.log(formatDate(new Date(new Date - 86400 * 1000)));
