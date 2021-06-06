// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Michael',
//     age: 44,
//     hobbies: ['sports', 'python'],
//     role: [2, 'author'],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN = 10, READ_ONLY, AUTHOR};

const person = {
    name: 'Michael',
    age: 44,
    hobbies: ['sports', 'python'],
    role: Role.ADMIN
};


//person.role.push ('admin');
//person.role[1] = 10;

let favoriteActivties: string[];
favoriteActivties = ['Sports'];


console.log("age:", person.age, "favorite Activities", favoriteActivties);

for (const hobby of person.hobbies) {
    console.log(hobby)
}

if (person.role === Role.ADMIN) {
    console.log('is admin')
}