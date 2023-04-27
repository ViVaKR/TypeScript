// 인터페이스

// ( Agendda )
// Createing interfaces
// Using Interfaces as Types
// Implementaing Interfaces
// Extending Interfaces
// Optional Properties
// Object destructuring
// Array destructuring

export interface User {
    name: string;
    age?: number;
    id: number;
    email: string;
}

export interface Address {
    SiDo: string;
    SiGunGu: string;
    Street: string;
    Building: string;
    ZipCode: string;
}

interface Employee extends User {
    salary:number;
}

export interface Login  {
    Login(): User;
}

let user: Employee = { name: "Viv", id: 1, email: "", salary: 1000 };
