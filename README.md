# Typescript

## 자바스크립트의 치명적 단점을 해결하기 위해 마이크로소프트에서 만든 언어
> A programming language to address shortcoming of JavaScript.   
> 자바스크립트 + 타입체킹 (JavaScript with Type Checking), 컴파일하는 것만으로 충분함으로, 코드 테스트가 불필요함
> 코드 완성 (Code completion), 리팩토링 (Refactoring)과 같은 생산성 향상 미래지향적 (New features) 기능 제공함
> Front End + Back End
> 자바스크립트의 기능 모두를 포함하고 + More More Benefits
> 컴파일 필요 : .ts -> Compiler -> .js
> 큰 규모프로젝트에 적합 : Medium to large projects (TypeScript) vs Simple projects (JavaScript)

## 자바스크립와 비교
> Statically-Typed : C#, C++, Java (e.g. int number = 0; -> (안됨, not) number = "a";)    
> Dynamically-Typed : JavaScript, Python, Ruby (e.g. let number = 10; -> (런타임에 타입이 변경됨, ok) number = "a")
> 즉, 버르장머리 없이 자라 미래가 없는 아이와 교육받으며 올바르게 자란 가능성 있는 아이와 같은 차이가 있으므로  
>> 자바스크립트는 미래에 집안(프로젝트)에서 항상 치명적인 손실을 발생시킴, 신혼 초 매우 작은 집(프로젝트)에서 100줄 미만 단순 테스트 용

## 타입스크립트 효과 요약 (Benefits)
1. Static typing  
2. Code completion  
3. Refactoring  
4. Shorthand notations  

## 개발환경 설정 (Setting Up the Development Environment)
1.  Install Node
   
> 윈도우 : 설치파일 다운로드 -> [_**node**_ LTS version](https://nodejs.org)  

> 맥 (macOD) : 터미널에서 설치 : [HomeBrew Install](https://brew.sh/)

```bash
    # 터미널에서 `HomeBrew` 설치
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
```bash
    brew update && ugrade
    brew install node
```

> 공통 (윈도우, 맥) : 터미널에서 실행
```bash
    npm update -g
    npm install - npm@latest -g
    npm install -g typescript
    tsc -v # 정상설치여부 확인
```

> 타입스크립트 설치 (Install TypeScript)
```bash
    npm i -g typescript
    tsc -v
```
> 개발 편집기 설치 (Visual Studio Code) : [Download](https://code.visualstudio.com/)
---
## 시작 (First Programming)
---
### 프로젝트 폴더 생성 후 편집기(vscode)로 열기  
```bash
    cd ProjectParentFolder # (프로젝트를 만들 루트 디렉토리로 이동)
    mkdir hello-world # 실재 프로젝트 폴더
    cd hello-world
    code .  # Open Visual Studio Code Editor, Current hello-world folder
```

## vscode (Visual Studio Code) 
> create .ts file -> `hello-world/src` folder -> `index.ts` file  

## index.js
```typescript
    console.log('Hello World');
```

## `Termianl Open (shortcut)` = CTRL + \`
> **(vscode opened terminal)**
```bash
    tsc index.ts
```

## 프로젝트 초기화
```bash
    hello-world > $ tsc --init # -> created tsconfig.json
```

## open `tsconfig.json`
> (주의) 대부분이 주석처리 되어 있으며, 활성화 된것은 몇개 없으므로 겁먹지 않기...

## `tsconfig.json` Settings  

+ target : 타입스크립트 컴파일러가 생성할 자바스크립트의 버전을 지정
    + 현재 target 값을 지우고 `CTRL + Space` 로 유효한, 사용 가능한 자바스크립트 버전 목록 표시
    + 가장 최신 것일 수록 짧고 간결한 자바스크립트 코드 생성되나...
      + 모든 응용 프로그램에 가장 안전한 옵션으로 설정
        + e.g. -> `"target": "ES2016"` 

+ rootDir : 주석 제거, 활성화
    + hello-world / `src` 폴더를 생성한 후 해당 폴더를 값으로 지정   
      + e.g. -> `"rootDir": "./src"` (src 폴더 생성 함)
+ Emit Section 으로 이동
  + `outDir` : 컴파일 후 생성될 자바스크립트 폴더를 지정  
   + e.g. -> `"outDir": "./dist"` 배포 가능한 폴더 명 dist  

  + `removeComments` : 타입스크립트에서 만든 주석을 컴파일 시 제거하기
    + e.g. ->  `"removeComments": true`

  + `noEmitOnError` : 오류 발생시 컴파일하지 않음, 즉 방출(Emit) 하지 않음
    + e.g. -> `"noEmitOnError": true`

_* tip 1_ : 터미널에서 파일 지정없이 `tsc ` 는 프로젝트 폴더내 모든 타입스크립파일을 컴파일함 즉, 서브폴더 `src/` 의 모든 ts file compile

## 컴파일
```bash
    hello-worl > $ tsc 
    # dist/index.js 파일이 정상적으로 생성됨을 확인하기...
```

## Debugging TypeScript Applications (디버깅 설정)
> 코드에 문제가 발생하였을 시 한줄 하줄 실행하면서 내부에서 어떤일이 발생하는지 확인하기
> Setttings

1. `tsconfig.json` 에서
   + `Emit` Section
     + `"sourceMap": true` 주석제거, create source map file 
     + 타입스크립트 코드가 자바스크립트 코드에 매핑되는 방법을 지정하는 파일 (e.g.)`dist/index.js.map`
       + `index.js.map` example : 디버거를 위한 기계어 코드이므로 이해 할 수 없고 할 필요도 없음
        ```json
            {"version":3,"file":"index.js","sourceRoot":"","sources":["../src/index.ts"],"names":[],"mappings":";AAAA,IAAI,GAAG,GAAW,EAAE,CAAC;AACrB,OAAO,CAAC,GAAG,CAAC,aAAa,CAAC,CAAC"}
        ```

2. `편집기`에서 `디버거` 패널로 이동
    + `실행 및 디버그` 에서 `create a launch.json` 을 클릭하여 `launch.json` 생성
    + select `node.js` 선택

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

Arrays  
Objects  
Functions  
Arrow Functions  
Destructuring


