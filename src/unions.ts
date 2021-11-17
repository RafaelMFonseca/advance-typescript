// Types Unions
// With a union, you can declare that a type could be one of many types. 

interface Person {
    name: string;
    age: number;
}

interface Company {
    name: string;
    address: string;
}

type MyEntity = Person | Company;

const persons = [
    {
        name: 'Mike',
        age: 68
    }
];

const entity: MyEntity = persons[0];

console.log(entity.age); // Can access age

function getName(entity: MyEntity) {
    return entity.name; // Can't access age
}

console.log(getName(persons[0]));

type OddNumbers = 2 | 4 |6 | 8 | 10;

const odd: OddNumbers = 4;

console.log(odd);