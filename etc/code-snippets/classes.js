"use strict";
//=== 클래스 ===//
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_hidden;
Object.defineProperty(exports, "__esModule", { value: true });
// import * as UserLogin from './interfaces'
class Employee {
    // 속성 : Properties
    get empId() {
        return this.id;
    }
    set empId(id) {
        this.id = id;
    }
    /**
     * 생성자
     * 복수의 생성자는 지원되지 않음
     */
    constructor(id, name, age, hidden, addr) {
        _Employee_hidden.set(this, void 0); // 해쉬로 숨김처리
        this.id = id;
        this.name = name;
        this.age = age;
        __classPrivateFieldSet(this, _Employee_hidden, hidden, "f");
        this.addr = addr;
    }
    // 메서드
    getInfo() {
        return `Id: ${this.id}, Name: ${this.name}, Age: ${this.age}, Hidden: ${__classPrivateFieldGet(this, _Employee_hidden, "f")}, Address: ${this.addr}`;
    }
    // 정적 메서드
    static getValue() {
        return 102;
    }
    Login() {
        return { name: "Viv", id: 1, email: "hello@email.com" };
    }
}
_Employee_hidden = new WeakMap();
// 파생클래스
class Manager extends Employee {
    constructor(id, name, age, hidden, addr) {
        super(id, name, age, hidden, addr);
    }
}
// Create instance
let viv = new Manager(1, "VivaKR", 35, 456, { SiDo: "서울시", SiGunGu: "광진구", Street: "가로수길 3-5", Building: "사자빌딩", ZipCode: "12030" });
viv.empId = 101;
console.log(viv.getInfo());
console.log(Employee.getValue()); // 정적 메서드 호출
