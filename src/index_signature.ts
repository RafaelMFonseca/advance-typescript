// You can use index signature to describe the types of possible values.

interface IndexedType {
    // Types allowed for index signature properties: string, number, symbol, template string patterns, and union types consisting only of these.
    [index: number]: string;
    [index: string]: string;
    [index: symbol]: string;
}

function getIndexedType(): IndexedType {
    return { };
}

const myIndexedValue = getIndexedType();
console.log(myIndexedValue[1]);
console.log(myIndexedValue['some']);
console.log(myIndexedValue[Symbol('symb1')]);

// The type returned from a numeric indexer must be a subtype
// of the type returned from the string indexer

// This is because when indexing with a number, JavaScript will actually
// convert that to a string before indexing into an object.
// That means that indexing with 100 (a number) is the same thing as indexing
// with "100" (a string), so the two need to be consistent.

interface IndexedWithSubtype {
    [index: string]: string;
    [index: number]: string;
}

interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

interface IndexedWithAnimaSubtype {
    // WRONG! numeric is not subtype of string indexer here!
    [index: string]: Dog;
    // @ts-expect-error
    // 'number' index type 'Animal' is not assignable to 'string' index type 'Dog'.
    [index: number]: Animal;
}

// The inverse is ok:

interface IndexedWithAnimaCorrectSubtype {
    // numeric indexer is subtype of string indexer here!
    [index: string]: Animal;
    [index: number]: Dog;
}


// All properties of an object must match the string index's type, because a
// string index declares that obj.property is also available as obj["property"]
interface IndexedWithProperties {
    [name: string]: number;

    // @ts-expect-error
    age: string; // ERROR! Property 'age' of type 'string' is not assignable to 'string' index type 'number'.
}

interface IndexedWithPropertiesAndSubtype {
    [name: string]: Dog;

    // @ts-expect-error
    dog: Animal; // ERROR! Property 'dog' of type 'Animal' is not assignable to 'string' index type 'Dog'
}

interface IndexedWithUnionTypes {
    [name: string]: Animal | string;

    dog: Dog; // OK!
    specie: string; // OK!
    // @ts-expect-error
    age: number; // ERROR!
}

//  index signatures can be readonly in order to prevent assignment to their indices.
interface IndexedReadOnly {
    readonly [name: string]: number;
}

function getIndexedReadOnly() : IndexedReadOnly {
    return { };
}

const indexedValue = getIndexedReadOnly();

// @ts-expect-error
indexedValue['some-here'] = 10; // ERROR! Index signature in type 'IndexedReadOnly' only permits reading.
console.log(indexedValue['some-here']); // OK!