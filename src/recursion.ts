let count = 0
function recursion(a: number): number {
    console.log(count++, a);


    if (a == 10) { // Base case
        return count;
    }

    return recursion(a + 1) // Recursive Call.
}

console.log(recursion(0))

// 재귀를 사용하는 목적
// (1) -> 우아함과 복잡성 사이의 간극을 연결합니다.
// (2) -> 복잡한 루프 및 보조 데이터 구조의 필요성을 줄입니다.
// (3) -> 메모이제이션 쉽게 시간 복잡도를 줄일 수 있습니다.
// ** 메모이제이션(memoization)은 컴퓨터 프로그램이 동일한 계산을 반복해야 할 때, 이전에 계산한 값을 메모리에 저장함으로써 동일한 계산의 반복 수행을 제거하여 프로그램 실행 속도를 빠르게 하는 기술이다.동적 계획법의 핵심이 되는 기술이다. ** //
// (4) -> 재귀적으로 정의된 JSON, Tree, 그래프와 같은 재귀 구조와 정말 잘 작동합니다.

// 재귀를 피하려는 문제 
// (1) -> CPU 오버헤드로 인한 속도 저하.
// (2) -> 메모리 부족 오류 / 스택 오버플로 예외가 발생할 수 있습니다.
// (3) -> 구성이 잘못되면 불필요하게 복잡해질 수 있습니다.


//========== Call Stack ==========//
let cnt = 0;
function pow(x: number, n: number): number {
    if (n == 1) {

        console.log(`${++cnt} (n == 1) ` + x)

        return x; // (1) 최상단 콜스택 빼기  

    } else {

        // (2) n => 3
        let temp = x * pow(x, n - 1) // 콜스택에 쌓기시작

        console.log(`${++cnt} -> ${x} ^ ${n}- ${temp}`)

        return temp;
    }
}

//  2 * 2 ^ 1 // pop first
//  2 * 2 ^ 2 // pop End => result 8
// ========== //
// 
console.log(pow(2, 3))

// (1) Help Jake Code 
// (2) Impress Investors
// (3) Attend Metting
// (4) Check Email

//==== Frame ====//
function A() {
    return "hello " + B();
}

function B() {
    return "my " + C();
}

function C() {
    return "friends";
}

// -> 함수 호출 순으로 차례로 스택 프레임을 쌓아 만듬 <- //
// (3) "friends"
// (2) "my " + C();
// (1) "hello " + B();

// -> 역순으로 처리되어 번호순으로 스택에서 제거됨 <- //
// (1) return "friends"
// (2) return "my " + "friends"
// (3) return "hello " + "my " + "friends"


// (예) 문자열 반전 (string reversal)
function reverseString(input: string): string {
    // 기본 사례는 무언인가?
    // 언제 더이상 작업을 지속할 수 없는가?
    // 또한 빈 문자열이 전달되었다면 작업을 지속할 필요가 없는 케이스
    if (!input) {
        return "";
    }

    // 각 반복에서 수행할 수 있는 최소작업은 무엇인가?
    // 문자열 처리에서 처리할 수 있는 가장 작은 단위는 무엇인가?
    // 각 호출사이에 리버싱할 수 있는 최소 '단위' 는 무엇인가?
    // 문제의 공간을 축소하기 + 작업의 가장 작은 단위
    return reverseString(input.substring(1)) + input.charAt(0)
}
// ======================================================== //
// reverseString("") + "o" stack 5, return 'o' base case 
// reverseString("o") + "l" stack 4, return 'ol' 
// reverseString("lo") + "l" stack 3, return 'oll' 
// reverseString("llo") + "e" stack 2, return 'olle' 
// reverseString("ello") + "H" start 1, return 'olleH' 
console.log(reverseString("Hello")) // result -> 'olleH'
// (끝) 문자열 반전 

//========== Palindrome (kayak) ==========//
// 팰린드롬 : 직역하면 회문으로 'kayak', 'eye', 'madam' 처럼 역순으로 읽오도 같은 단어

function isPallindrome(input: string): boolean {

    // Define the base-case / stopping condition
    // 1. 길이가 0 입니까? 아니면 1인가요? 
    // 2. 아닙니다 -> 그럼 우리는 계속합니다.
    if (input.length === 0 || input.length === 1) {
        return true;
    }

    // Do some work to shrink the problem space
    // 문자열 끝 문자 : string.length - 1
    if (input.charAt(0) === input.charAt(input.length - 1)) {
        return isPallindrome(input.substring(1, input.length - 1));
    }

    // Additional base-case to handle non palindromes
    return false;
}
// Palindrome Print Test
// ex.1)
let s4: string = 'racecar'
let check: boolean = isPallindrome(s4)
console.log(`'${s4}' is Palindrome? -> ${check}`);

//    e    //  return true 1
//   cec   // stack 3 retrun true 2 
//  aceca  // stack 2 return true 3
// racecar // stack 1 return true 4

// ex.2) true
let s2 = 'HellolleH'
console.log(s2 + ' -> ' + isPallindrome(s2));
// ex.3) false
let s3 = "HiEveryone"
console.log(s3 + " -> " + isPallindrome(s3));

// ======================== Decimal To Binary ========================//
// 10 진수 '233 를 2진수로 변환하기 // 
// 233 // 2 =>  116 rem = 1
// 116 // 2 => 58 rem = 0
// 58 // 2 => 29 rem = 0
// 29 // 2 = 14 rem = 1
// 14 // 2 = 7 rem = 0
// 7 // 2 = 3 rem = 1
// 3 // 2 = 1 rem = 1
// 1 // 2 = 0 rem = 1  <- top of stack -> 여기 부터 pop
//= result => `11101001`

// (2진수 만들기 구현) //
function makeBinary(decimal: number, result: string): string {

    // base 
    if (decimal == 0) return result;
    result = decimal % 2 + result; // 나머지 만들기 (즉 2진수 만들기)
    return makeBinary(decimal / 2, result);
}

// console.log(makeBinary(233, ""));




