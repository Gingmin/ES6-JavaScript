"use strict";
// let room = {
//     number: 23
// };
//
// let meetup = {
//     title: "Conference",
//     participants: [{name: "John"}, {name: "Alice"}],
//     place: room
// };
//
// room.occupiedBy = meetup;
// console.log(JSON.stringify(meetup, ['title', 'participants']));
// console.log("s");

// let room = {
//     number: 23
// };
//
// let meetup = {
//     title: "Conference",
//     participants: [{name: "John"}, {name: "Alice"}],
//     place: room // meetup은 room을 참조합니다
// };
//
// room.occupiedBy = meetup; // room은 meetup을 참조합니다
//
// console.log( JSON.stringify(meetup, function replacer(key, value) {
//     console.log(`${key}: ${value}`);
//     return (key == 'occupiedBy') ? undefined : value;
// }));

/* replacer 함수에서 처리하는 키:값 쌍 목록
:             [object Object]
title:        Conference
participants: [object Object],[object Object]
0:            [object Object]
name:         John
1:            [object Object]
name:         Alice
place:        [object Object]
number:       23
*/

// let room = {
//     number: 23,
//     toJSON() {
//         return this.number;
//     }
// };
//
// let meetup = {
//     title: "Conference",
//     room
// };
//console.log( JSON.stringify(room) ); // 23

//console.log( JSON.stringify(meetup) );
/*
  {
    "title":"Conference",
    "room": 23
  }
*/

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
//
// let mu = JSON.parse(str, function(key, value) {
//    if(key == 'date') return new Date(value);
//    return value;
// });
//console.log(mu.date.getDate());

//=================================================================================
// let user = {
//     name: "John Smith",
//     age: 35
// };
//
// let temp = JSON.stringify(user, null, 2);
// //console.log(temp);
// let user2 = JSON.parse(temp);
// //console.log(user2);

let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
};

// 순환 참조
room.occupiedBy = meetup;
meetup.self = meetup;

// console.log( JSON.stringify(meetup, function replacer(key, value) {
//     /* 코드를 작성할 곳 */
//     return (key != "" && value == meetup) ? undefined : value;
// }, 2));

/* 얼럿창엔 아래와 같은 결과가 출력되어야 합니다.
{
  "title":"Conference",
  "occupiedBy":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/