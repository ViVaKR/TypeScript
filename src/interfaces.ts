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

let user: User = { name: "Viv", id: 2, email: "" };

user.name;
user.email;

export interface Address {
    SiDo: string;
    SiGunGu: string;
    Street: string;
    Building: string;
    ZipCode: string;
}

interface Employee extends User {
    salary: number;
}

let employee: Employee = { name: "Viv", id: 1, email: "hello@email.com", salary: 1000 };

export interface Login {
    Login(): User;
}
