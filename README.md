# Typescript

- Alternative to JavaScript (superset)
- Allows us to use strict types
- Supports modern features (arrow functions, let, const)
- Extra fratures (generics, interfaces, tuples etc)
- 자바스크립트의 여러 단점들을 해결하기 위해 마이크로소프트에서 만든 언어
- 자바스크립트 + 타입체크 (JavaScript with Type Checking)
- 코드 완성 (Code completion), 리팩토링 (Refactoring)과 같은 생산성 향상 미래지향적 (New features) 기능 제공함
- 컴파일 필요 : .ts -> Compiler -> .js
- 큰 규모프로젝트에 적합 : Medium to large projects (TypeScript) vs Simple projects (JavaScript)

## 타입스크립트 장점 (Benefits)

1. Static typing  
2. Code completion  
3. Refactoring  
4. Shorthand notations  

```bash
    brew update && ugrade
    brew install node
```

> 공통 (윈도우, 맥) : 터미널에서 실행

```bash
    npm update -g
    npm install npm@latest -g
    npm install -g typescript
    tsc -v
    
    # or 
    npm i -g typescript
    tsc -v
```

## Start Programming

```bash
    cd ProjectParentFolder # (프로젝트를 만들 루트 디렉토리로 이동)
    mkdir hello-world # 실재 프로젝트 폴더
    cd hello-world
    code .  # Open Visual Studio Code Editor, Current hello-world folder
```

## vscode (Visual Studio Code)
>
> create _**.ts**_ file -> `hello-world/src` folder -> `index.ts` file  

## index.js

```typescript
    console.log('Hello World');
```

## `Termianl Open` ( _**CTRL + \`**_ )
>
> **(vscode opened terminal)**

```bash
    tsc index.ts
    node dist/index.js // print out result -> Hello World 
```

## 프로젝트 초기화

```bash
    hello-world > $ tsc --init # -> created tsconfig.json
```

## open `tsconfig.json`
>
> (주의) 대부분이 주석처리 되어 있으며, 활성화 된것은 몇개 없으므로 겁먹지 않기...

## `tsconfig.json` Settings  

- target : 타입스크립트 컴파일러가 생성할 자바스크립트의 버전을 지정
  - 현재 target 값을 지우고 `CTRL + Space` 로 유효한, 사용 가능한 자바스크립트 버전 목록 표시
  - 가장 최신 것일 수록 짧고 간결한 자바스크립트 코드 생성되나...
    - 모든 응용 프로그램에 가장 안전한 옵션으로 설정
      - e.g. -> `"target": "ES2016"`

- rootDir : 주석 제거, 활성화
  - hello-world / `src` 폴더를 생성한 후 해당 폴더를 값으로 지정
    - e.g. -> `"rootDir": "./src"` (src 폴더 생성 함)
- Emit Section 으로 이동
  - `outDir` : 컴파일 후 생성될 자바스크립트 폴더를 지정  
  - e.g. -> `"outDir": "./dist"` 배포 가능한 폴더 명 dist  

  - `removeComments` : 타입스크립트에서 만든 주석을 컴파일 시 제거하기
    - e.g. ->  `"removeComments": true`

  - `noEmitOnError` : 오류 발생시 컴파일하지 않음, 즉 방출(Emit) 하지 않음
    - e.g. -> `"noEmitOnError": true`

_* tip 1_ : 터미널에서 파일 지정없이 `tsc` 는 프로젝트 폴더내 모든 타입스크립파일을 컴파일함 즉, 서브폴더 `src/` 의 모든 ts file compile

## 컴파일

```bash
    hello-worl > $ tsc 
    # dist/index.js 파일이 정상적으로 생성됨을 확인하기...
```

## Debugging TypeScript Applications (디버깅 설정)
>
> 코드에 문제가 발생하였을 시 한줄 하줄 실행하면서 내부에서 어떤일이 발생하는지 확인하기
> Setttings

1. `tsconfig.json` 에서
   - `Emit` Section
     - `"sourceMap": true` 주석제거, create source map file
     - 타입스크립트 코드가 자바스크립트 코드에 매핑되는 방법을 지정하는 파일 (e.g.)`dist/index.js.map`
       - `index.js.map` example : 디버거를 위한 기계어 코드이므로 이해 할 수 없고 할 필요도 없음

        ```json
            {"version":3,"file":"index.js","sourceRoot":"","sources":["../src/index.ts"],"names":[],"mappings":";AAAA,IAAI,GAAG,GAAW,EAAE,CAAC;AACrB,OAAO,CAAC,GAAG,CAAC,aAAa,CAAC,CAAC"}
        ```

2. `편집기`에서 `디버거` 패널로 이동
    - `실행 및 디버그` 에서 `create a launch.json` 을 클릭하여 `launch.json` 생성
    - select `node.js` 선택

3. `launch.json` settings

## _[ .vscode/launch.json ]_

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "프로그램 시작",
            "skipFiles": [
                "<node_internals>/**"
            ],
            // "program": "${file}",
            "program": "${workspaceFolder}/src/index.ts",
            // (추가함)
            // tsconfig.json 을 사용하여 응용프로그램을 빌드하되,
            // 타입스크립트 컴파일러를 사용하도록 Visual Studio Code 에 지시.
            "preLaunchTask": "tsc: 빌드 - tsconfig.json",
            "outFiles": [
                "${workspaceFolder}/**/*.js"
            ]
        }
    ]
}

```

## _[ .vscode/task.json ]_

```json
{
    "version": "2.0.0",
    "tasks": [
        {
            "type": "typescript",
            "tsconfig": "tsconfig.json",
            "problemMatcher": [
                "$tsc"
            ],
            "group": "build",
            "label": "tsc: 빌드 - tsconfig.json"
        }
    ]
}
```

## TypeScript Built-in Data Types
>
| TypeScript |
| ---------- |
| string     |
| number     |
| array      |
| boolean    |
| any        |
| unknown    |
| never      |
| enum       |
| tuple      |
| object     |
| never      |
| void       |

## 명명규칙 (Namming Convention) : PascalCase

## Any Type  

```ts
// 선언과 동시에 초기화를 하면, 
// 타입에 관한 주석을 삭제할 수 있고 삭제하는 것이 보편적임
let sales: number = 123_456_789;    //== let sales = 123_456_789;
let course: string = 'TypeScript';  //== let course = 'TypeScript'; 
let is_published: boolean = true;   //== let is_published = true;

// 초기화 하지 않으면 Any Type
// 최기화 하지 않을 때에는 타입을 지정하는 것이 보편적입
let level; 
level = 1;
level = 'a'

// 파라미터에 타입 지정이 없을 때
// tsconfig.json 에서 
// "noImplicitAny": true -> 애러표시, false -> 표시없음
function render(document) {
    console.log(document);
}
```

## 배열 (Arrays)

```javascript

// 기본형식
let number: number[] = []; // let 
number[0] = 5;
number[1] = 7;
number.push(45);
```

## 튜플 (Tuples)  

```ts

// 튜플 (Tuples) 기본형식
// 고정길이 배열
// Key, Value 특성상 두개의 요소가 가장 권장됨
// 두개 이상일 때에는 아이템을 특성을 알리 어려움
let usr: [number, string] = [1, 'ViV'];
usr[0] = 145;
usr[0].toString();  // number 에 관한 속성만 인텔리센스
usr[1].length;      // string 에 관한 속성만 인텔리센스

console.log(usr[0]);
```

## 열거형 (Enum)

```ts
// enum 은 const 로 정의하면 컴파일러가 더욱 최적화된 코드를 생성함
const enum Size { Small = 's', Medium = 'm', Large = 'l' };   // char 형식
const enum Grade { first = 1, second = 2, third = 3 };        // number 형식 (보편적)
// const small = 1; const medium = 2; const large = 3;  // 일반변수 방식 (비교)

let myGrade = Grade.first;
let mySize = Size.Medium;

console.log(mySize);

```

## 함수 (Functions)

```ts
// 기본 형식
// 파라미터 관련 tsconfig -> "noUnusedParameters": true
function calclulateTax(income: number, taxYear?: number): number {
    
    // let x; // tsconfig -> "noUnusedLocals": true, 사용되지 않은 로컬변수 컴파일 오류
    // possiable null value -> (taxYear || defaultValue) or 
    // set default value -> (, taxYear: number = 2022)
    if ((taxYear || 2022) < 2023) {
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
console.log(calclulateTax(10_000, 2023)); // result 13_000

// string interpolation example -> `${variable}`
console.log(`${calclulateTax(10_000)}`);
```

## 타입 (Type)

```ts
    let employee: {
        readonly id: number, // 읽기전용 : readonly 키워드
        name: string , // optional name?: string, 초기화 생략가능
        retire: (date: Date) => void
    } = {
        id: 1,
        name: "Viv",
        retire: (date: Date) => {
            console.log(date);
        }
    };
    // not optional  ''(null) or undefined 설정가능
    
    // caller
    let emp = employee;
    emp.retire(new Date(2023, 3, 31));
    console.log(emp.name);
    // result
    // 2023-04-30T15:00:00.000Z
    // Viv
```  

## 고급타입 (Advanced Types)

```ts
// Type aliases
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = {
    id: 2,
    name: "Viv",
    retire: (date: Date) => {
        console.log(date);
    }
}

// Unions (|) , Narrowing
function kgToLbs(weight: number | string): number {
    // Narrowing
    if (typeof weight === 'number') {
        return weight * 2.2;
    } else {
        return parseInt(weight) * 2.2;
    }
}

console.log(`${kgToLbs(10)}`);
console.log(`${kgToLbs('10kg')}`);

// Intersections (&)
let weight: number & string; // default example

type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => { },
    resize: () => { }
}

// Literal Types : 값을 제한할 때
// Literal (exact, specific)
type Quantity = 50 | 100;
let quantity: Quantity = 100; // 50 또는 100으로 제한
type Metric = 'cm' | 'inch';

// Nullable types (유니언 타입 활용)
function greet(name: string | null | undefined) {
    if (name)
        console.log(`${name.toUpperCase()}`);
    else
        console.log(`Hola`);
}

greet(null); // tsconfig 에서 변경가능-> strictNullChecks: false, 그러나 절대 사용하면 안됨
greet(undefined);

// Optional Chaining
type Customer = {
    birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(1);

// Optional property access operator => ?, null 이 아니거나 undefined 가 아닐 때만 실행됨
console.log(`${customer?.birthday?.getFullYear()}`); //=> 'undefined' result

// Optional element access operator
// customers?.[0]

// Optional call
let log: any = null; // or (item: string) => console.log(item)
log?.('a');
```

## Refs

- [Mosh Hamedani](https://youtu.be/d56mG7DezGs)
