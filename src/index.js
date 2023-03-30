// 배열 (Arrays)
// 기본형식
var number = []; // let 
number[0] = 5;
number[1] = 7;
number.push(45);
// 튜플 (Tuples) 기본형식
// 고정길이 배열
// Key, Value 특성상 두개의 요소가 가장 권장됨
// 두개 이상일 때에는 아이템을 특성을 알리 어려움
var usr = [1, 'ViV'];
usr[0] = 145;
usr[0].toString(); // number 에 관한 속성만 인텔리센스
usr[1].length; // string 에 관한 속성만 인텔리센스
console.log(usr[0]);
// Enum, 열거형
var Size;
(function (Size) {
    Size["Small"] = "s";
    Size["Medium"] = "m";
    Size["Large"] = "l";
})(Size || (Size = {}));
; // char 형식
var Grade;
(function (Grade) {
    Grade[Grade["first"] = 1] = "first";
    Grade[Grade["second"] = 2] = "second";
    Grade[Grade["third"] = 3] = "third";
})(Grade || (Grade = {}));
; // number 형식 (보편적)
// const small = 1; const medium = 2; const large = 3;  // 일반변수 방식 (비교)
var myGrade = Grade.first;
var mySize = Size.Medium;
