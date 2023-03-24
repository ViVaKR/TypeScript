# Typescript
_Strongly Typed Languages_


> 설치 및 프로젝트 초기화
```bash
npm update -g
npm install - npm@latest -g
npm install -g typescript

// (terminal) at project
$ tsc --init
$ npm install -g ts-node # ts file 직접실행
$ ts-node  main.ts  # example run
```
> "tsconfig.json" 설정 
1. rootDir : ./src  # do create folder
2. outDir : ./build/js # do create folder
3. var keyword 사용 : target es5
4. add array
    "include": [
        "src" // src 디렉토리 외의 ts 파일은 무시됨
    ]
5. "noEmitOnError": true  # 에러발생시 컴파일 하지 않음
6. $ tsc --noEmitOnError -w # 실행시 5번과 동일한 유형 처리

> 변경사항 추적
```zsh
tsc -w
```
