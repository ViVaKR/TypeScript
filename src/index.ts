// funcitons
// 기본 형식
// 파라미터 관련 tsconfig
// "noUnusedParameters" , 사용하지 않는 파라미터 구불구불한 선 : true
function calclulateTax(income: number, taxYear: number): number {
    
    let x; // tsconfig -> "noUnusedLocals": true, 사용되지 않은 로컬변수
    
    if (taxYear < 2023) {
        return income * 1.2;
    }
    
    // default return undefined
    // 정의 되지 않은 것은 숫자가 아님으로
    // return 이 누락 (not all return value) 되면 오류 발생
    // 관련 tsconfig -> "noImplicitReturns": true, 꼼꼼한 리턴이 누락되면 컴파일 경고
    return income * 1.3; 
    // undefined
}

// Caller
calclulateTax(10_000, 2023);
