//=== 클래스 ===//

// ( Agenda )
// Introduction to Classes
// Creating Classes
// Class Properties and constructor
// Class methods
// Createing instance of Class
// Member Visibility
// Static Members

import { Address, Login, User } from './interfaces';
// import * as UserLogin from './interfaces'

class Employee implements Login {

    private id!: number;
    private name!: string;
    private age!: number;
    #hidden?: number; // 해쉬로 숨김처리
    protected addr?: Address;

    // 속성 : Properties
    get empId(): number {
        return this.id;
    }

    set empId(id: number) {
        this.id = id;
    }

    /**
     * 생성자
     * 복수의 생성자는 지원되지 않음
     */
    constructor(id: number, name: string, age: number, hidden: number, addr: Address) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.#hidden = hidden;
        this.addr = addr;
    }

    // 메서드
    getInfo(): string {
        return `Id: ${this.id}, Name: ${this.name}, Age: ${this.age}, Hidden: ${this.#hidden}, Address: ${this.addr}`;
    }

    // 정적 메서드
    static getValue(): number {
        return 102;
    }

    Login(): User {
        return { name: "Viv", id: 1, email: "hello@email.com" };
    }
}

// 파생클래스
class Manager extends Employee {
    constructor(id: number, name: string, age: number, hidden: number, addr: Address) {
        super(id, name, age, hidden, addr);
    }
}

// Create instance
let viv = new Manager(1, "VivaKR", 35, 456, { SiDo: "서울시", SiGunGu: "광진구", Street: "가로수길 3-5", Building: "사자빌딩", ZipCode: "12030" });

viv.empId = 101;
console.log(viv.getInfo());
console.log(Employee.getValue()); // 정적 메서드 호출
