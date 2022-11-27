// Types Unions
// With a union, you can declare that a type could be one of many types. 
// TypeScript will only allow you to do things with the union if that
// thing is valid for every member of the union.

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

type OddNumbers = 2 | 4 | 6 | 8 | 10;

const odd: OddNumbers = 4;

console.log(odd);

// Narrowing occurs when TypeScript can deduce a more specific type for a value based on the structure of the code.
// If every member in a union has a property in common, you can use that property without narrowing.

function printId(id: number | string) {
    if (typeof id === 'string') {
        console.log(id.toLowerCase());
    } else {
        console.log(id);
    }
}

printId("S39DJ");
printId(10);