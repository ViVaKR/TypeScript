// ** DataTypes ** //
let stringType: string;
let numberType: number;
let boolType: boolean;
let anyType: any;

// (union type)
let unionType: string | number;
let isRunnig: number | boolean;

// (regular express type)
let regExpType: RegExp = /w+/g

// (array)
let stringArr: string[] = ['one', 'two', 'three', 'hello', 'world']
let numberArr: number[] = [23, 2, 103, 455, 902]
let mixedArr: (string | number | boolean)[] = ['Viv', 2023, true]
let anyArr = [] // anytype array
let carArr: string[] = []
carArr.push("Avante")

// array usage examples
stringArr[0] = 'ten'
stringArr.push('hello')
numberArr[0] = 456
let emptyArr: string[] = []
// insert item start position
numberArr.unshift(105)

for (let index = 0; index < numberArr.length; index++) {
    const element = numberArr[index];
    console.log(element)
}

mixedArr.unshift(100000)
for (const item in mixedArr) {
    console.log(mixedArr[item])
}

// Tuple
let myTuple: [string, number, boolean] = ['Viv', 456, false]
console.log(myTuple[0])

let mixed = ['John', 1, true] // union type
myTuple[1] = 1000 // 타입과 동일한 위치에 할당하여야 함
mixed = myTuple // 유니온 타입에 튜플을 할당할 수 있으나 반대는  안됨
// myTuple = mixed
console.log(mixed[1])

// Objects
let myObj: object
myObj = []
myObj = {}
myObj = emptyArr    // enable assign other array
console.log(typeof myObj) // return object

const exampleObj = {
    prop1: 'Hello',
    prop2: true
}

// exampleObj.prop2 = 45  // error : type not equals
exampleObj.prop1 = "World"
console.log(typeof exampleObj)
console.log(exampleObj.prop1)

// define User Type
type DataList = {
    title: string,
    count?: number, // number | undefined, union type
    contents: (string | number)[]
}

let csharpList: DataList = {
    title: 'C#',
    count: 34,
    contents: ['Variable', 'Method', 20000]
}

let tsList: DataList = {
    title: 'Typescript',
    // count: 34,   // union type 으로 생략 가능함
    contents: ['Variable', 'Union', 35000]
}

csharpList = tsList  // assigned possible

const getList = (csharp: DataList) => {
    return `Data List : ${csharp.title}, 
            ${csharp.count}, ${csharp.contents}`
}

console.log(getList(csharpList))


