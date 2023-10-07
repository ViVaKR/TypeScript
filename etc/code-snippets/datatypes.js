"use strict";
// tuple (튜플)
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num1, num2];
}
swapNumbs = swapNumbers(10, 35);
swapNumbs[0];
// swapNumbs[2]; -> 튜플은 잘못된 인덱스 접근시에, 컴파일 타임에 오류를 표시
let c = 2 /* Color.Blue */;
let blue = 2;
console.log(`enum ex : Color.Blue -> ${c}, 2 -> ${blue}`);
let age;
age = 25;
age = 3.14;
let dob = "456";
let toInt = parseInt(dob);
console.log(`To Int : ${toInt}`);
// boolean
let isValid = false;
console.log(`is Valid : ${isValid}`);
// array (배열)
let emplist;
emplist = ["Viv1", "Viv2", "Viv3"];
let emp = emplist.find(x => x === "Viv3");
console.log(`${emp}`);
let numList;
numList = [1, 2, 3, 4, 5];
// numList[8]; -> 배열은 잘못된 인덱스 접근시에, 컴파일 타임에 오류를 표시 하지 않음
console.log(`${numList}`);
// reduce : 누산 합계
let sum = numList.reduce((acc, num) => acc + num);
console.log(`Sum : ${sum}`);
// filter : 
let result = numList.filter(x => x > 2); // like Where
console.log(result, typeof (result));
// find : like FirstOrDefault, value or undefinded
let find = numList.find(x => x === 9);
console.log(`${find}`);
// any : `"noImplicitAny": true`
let department;
department = "IT";
department = 10;
