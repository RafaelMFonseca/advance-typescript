// Properties can also be marked as readonly for TypeScript. 
// While it won’t change any behavior at runtime, a property
// marked as readonly can’t be written to during type-checking.

type ReadOnlyPerson = {
    readonly name: string;
    readonly age: number;
}

const readonlyPerson: ReadOnlyPerson = { name: 'Mark', age: 24 };

// @ts-expect-error
readonlyPerson.name = "Chris";

// @ts-expect-error
readonlyPerson.age++;