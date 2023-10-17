# TODO Project

```bash
    # tsconfig.json 
    tsc --init
    npm init -y
    npm install nodemon concurrently

```

## package.json

- Add `start part`

```json

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start: build": "tsc -w",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*"
  }



```

## 타입 어노테이션

- 타입 어노테이션은 데이터 타입에 대해 명시하는 방법입니다.
