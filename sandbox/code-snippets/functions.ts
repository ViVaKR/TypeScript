//== Agenda ==//
// Different ways to write functions
// Generic Function
// Optional Parameters
// Required Parameters
// Rest Parameters

// 함수 기본형
console.log("== Function Example ==")
function add(a: number, b: number): number {
    return a + b;
}
console.log(`4 + 5 = ${add(4, 5)}`)

// 변수에 할당
console.log();
console.log("== Asign Variable ==");
const mult = function (a: number, b: number): number {
    return a * b;
}
console.log(`23 * 4 = ${23 * 4}`);

// 람다식 함수
console.log("== arrow function")
const sub = (a: number, b: number): number => a / b;
console.log(`145 / 56 = ${sub(145, 56)}`);

// 선택적 파라미터
console.log();
console.log("== optional parameter function ==");
const optional = (a: number, b: number, c?: number): number => c ? a + b + c : a + b;
console.log(`3 + 4 + 5 =  ${optional(3, 4, 5)}`);

// 기본값 파라미터
console.log();
console.log("== defautl parameter value ==")
const dft = (a: number, b: number, c = 33): number => a + b + c;
console.log(`34 - 23 - null = ${dft(34, 23)}`);

// 동적크기 배열 파라미터
console.log();
console.log("== 동적 크기 배열 파라미터 ==")
function add2(a: number, b: number, ...c: number[]): number {
    return a + b + c.reduce((sum, x) => sum + x);
}
console.log(`${add2(1000, 100, ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10])}`)
console.log();
console.log(`${add2(1000, 100, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)}`)

// 제너릭 함수
console.log();
console.log("== Generic Function ==")
function getItems<T>(item: T[]) {
    return new Array<T>().concat(item);
}

console.log(getItems<string>(["Hello", "World", "Fine", "Thanks", "And", "You"]));
console.log(getItems<number>([1, 2, 3, 4, 5, 6, 7]));
