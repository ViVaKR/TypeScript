let reg = /\d{3}-\d{4}-\d{4}/;


let tf = reg.test('010-1111-2222');
let tf2 = reg.test('010-11-2222');
// console.log(`${tf} - ${tf2}`);

// 정규식 구성 코드 형식
// 시작기호(/) 패턴 종료기호(/) 플래그(i)

// ("문자열").match(/정규표현식/플래그)	"문자열"에서 "정규표현식"에 매칭되는 항목들을 배열로 반환
// ("문자열").replace(/정규표현식/, "대체문자열")	"정규표현식"에 매칭되는 항목을 "대체문자열"로 변환
// ("문자열").split(정규표현식)	"문자열"을 "정규표현식"에 매칭되는 항목으로 쪼개어 배열로 반환
// (정규표현식).test("문자열")	"문자열"이 "정규표현식"과 매칭되면 true, 아니면 false반환
// (정규표현식).exec("문자열")	match메서드와 유사(단, 무조건 첫번째 매칭 결과만 반환)
// \d : 숫자를 의미하고 {} 안의 숫자는 갯수를 의미

reg = /abc/;
reg = new RegExp(/abc/); // or
reg = new RegExp("abc");

reg = /World/;
let str = 'Hello World Fine Thanks And You';

reg.test(str);

console.log(`match : ${str.match(reg)}, replace : ${str.replace(reg, "Nice")}`);

// Flag (i, g, m, s, u, y)
// 'a' 가 두번이상 포함된 문자열
str = 'abcabcaakd';
// 'g' 플래그로 모든 결과를 배열로 반환


// g : 전역검색, 모든 검색 결과 배열로 반환    
console.log(`not g : ${str.match(/a/)?.input} -> ${str.match(/a/)}`);
console.log(`not g : ${str.match(/a/g)?.length}`);

str.match(/a/g)?.forEach((x, i) => {
    console.log(`${i} - ${x}`);
});


// m : 개행된 다음 줄도 검색,세번째 줄도 검색은 g 플래그와 혼합 
str = "Hello World and\nPower Hello?\nPower Overwhelming!!";
str.match(/^Power/gm)?.forEach((x, i) => {
    console.log(`${i} - ${x}`);
});

str = "abcABC";

// 대소문자 a 검색
str.match(/a/gi); // (2) ["a", "A"]

str.match(/a/gi)?.forEach((x, i) => console.log(`${i} - ${x}`));
str = "Hello World apple banana apple Fine Thanks apple Nice";

// a-zA-Z       : 영어알파벳 
// ㄱ-ㅎ가-힣    : 한글문자 
// 0-9          : 숫자
// .            : 모든 문자열 (숫자, 한글, 영어, 특수기호, 공백 모두 단 줄바꿈은 안됨)
// \d           : 숫자
// \D           : 숫자가 아닌 것
// \w           : 밑줄 문자를 포함한 영숫자 문자, [A-Z,a-z,0-9] 와 동일
// \W           : \w 가 아닌것
// \s           : space 공백
// \S           : space 공백이 아닌 것
// \특수기호     : \*, \^, \&, \!, \? ... 등
// \b           : 63개 문자(영문 대소문자 52개 + 숫자 10개 + _(underscore))가 아닌 나머지 문자에 일치하는 경계(boundary)
// \B	        : 63개 문자에 일치하는 경계
// \x	        : 16진수 문자에 일치
// /\x          : 61/는 a에 일치
// \0	        : 8진수 문자에 일치 /\141/은 a에 일치
// \u	        : 유니코드(Unicode) 문자에 일치 /\u0061/는 a에 일치
// \c	        : 제어(Control) 문자에 일치
// \f	        : 폼 피드(FF, U+000C) 문자에 일치
// \n	        : 줄 바꿈(LF, U+000A) 문자에 일치
// \r	        : 캐리지 리턴(CR, U+000D) 문자에 일치
// \t	        : 탭 (U+0009) 문자에 일치

// |            : OR (a|b)
// []           : 괄호안의 문자들 중 하나. 각각 모두 or 묶음
//                /abc/ -> "abc" 를 포함하는
//                /[abc]/ -> "a" or "b" or "c"
//                /[가-다]/ -> "가" or "나" or "다"
// [^문자]       : 괄호안의 문자들을 제외한 것, [^abCD] -> a, b, C, D 4개의 문자를 제외

// ^문자열       : 특정 문자열로 시작, /^https/ -> "https" 로 시작

// 문자열$       : 특정 문자열로 끝남, /com$/ -> "com" 으로 끝남

str.match(/banana$/gi)?.forEach((x, i) => console.log(`${i} - ${x}`));

// ?            : 없거나 힌개만 있거나, /banana?/
str.match(/Apple?/gi)?.forEach((x, i) => console.log(`${i} - ${x}`));
reg = new RegExp(/World*/);
console.log(`World exit once -> ${reg.test(str)}`);

// *            : 없거나 여러개 있거나, 
str.match(/apple*/g)?.forEach((x, i) => console.log(`${i} - ${x}`));

// +            : 최소 한개 or 이상
let ko = 'kokokoko'.match(/ko+/); // "ko"
let koo = 'kooookoooo'.match(/ko+/); // "koooo"
console.log(`ko+ ${ko}, koo++ ${koo}`)

koo?.forEach(x => console.log(`koo => ${x}`));

// *?           : 없거나 많이 있거나 and 없거나 최대 한개 : 없음, {0}과 동일

// +?           : 최소 한걔, 여러개 있거나 and 없거나 최대 한개 있거나 : 한개 {1} 과 동일

// {n}          : n 개

// {Min, }      : 최소 Min 개 이상

// {Min, Mac}   : 최소 Min 개 이상, 최대 Max 개 이하, {3, 5} => {3} 과 동일

// ()          : 그룹화 및 캡쳐

// (?:패턴)     : 그룹화 (캡쳐 X)
