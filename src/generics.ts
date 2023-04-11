type StringArray = Array<string>;

let names: StringArray = [ "Mike", "John" ];

interface Bag<T> {
    add: (key: string, obj: T) => void;
    get: (key: string) => T;
}

// you actually treat these parameters(T) as if they could be any and all types.
// someone using this function could have passed in a number instead, which does not have a .length member.
function logging<T>(arg: T): T {
    // @ts-expect-error
    console.log(arg.length); // Error: T doesn't have .length
    return arg; 
}

// In TypeScript, generics are used when we want to declare a type parameter in the signature.
// Since we’re working with arrays, the .length member should be available. We can describe
// this just like we would create arrays of other types:
function firstOrUndefined<T>(arr: T[]): T | undefined {
    return arr[0];
}

// By adding a type parameter Type, we’ve created a link between the input of the function
// and the output.
// The type was inferred
// type argument inference => we want the compiler to set the value of Type for us automatically
// based on the type of the argument we pass in
const firstNumber = firstOrUndefined([1, 2, 3]); // firstNumber = number | undefined

// We can use multiple type parameters as well.
function filterArray<T, R>(arr: T[], filter: (elem: T) => R) {
    return arr.filter(filter);
}

// TypeScript could infer both the type of the Input type parameter
const filteredNumber = filterArray([1, 2, 3], (n) => n > 2);

// Using a constraint to limit the kinds of types that a type parameter can accept.
// constraints = extends
function longest<T extends { length: number }>(a: T, b: T) {
    // Return type inference also works on generic functions.
    return (a.length > b.length) ? a : b;
}

// The types of l1 and l2 were inferred based on the arguments.
const l1 = longest([1, 2], [1, 2, 3]); // l1 = number[]
const l2 = longest("abc", "abcdef"); // l2 = "abc" | "abcdef"

// @ts-expect-error
console.log(longest(10, 20)); // ERROR! number type doesn’t have a .length property

function minimumLength<Type extends { length: number }>(obj: Type, minimum: number): Type { // Returns Type, not { length: number }
    if (obj.length >= minimum) {
        return obj;
    } else {
        // @ts-expect-error
        return { length: minimum }; // ERROR! because the function promises to return
                                    // the same kind of object as was passed in, not
                                    // just some object matching the constraint.
    }
}

// Type aliases can also be generic
type MyBox<T> = { content: T };

// With type aliases we can describe more than just object types,
// we can also use them to write other kinds of generic helper types.
type ObjectOrNull<T> = T | null;
type StringOrNull = ObjectOrNull<string>;

// The type of generic functions is just like those of non-generic functions,
// with the type parameters listed first, similarly to function declarations:
let myIdentity: <T>(arg: T) => T = (arg) => arg;

// OR we can write the generic type as a call signature of an object literal type:
let myIdentityTwo: { <T>(arg: T): T } = (arg) => arg;

// OR we can move it to an interface
interface GenericIdentityFn {
    <T>(arg: T): T;
}

// OR we can move the generic parameter to be a parameter of the whole interface
// This makes the type parameter visible to all the other members of the interface.
interface GenericIdentityFnTwo<T> {
    (arg: T): T;
}

// NOTE: is not possible to create generic enums and namespaces.
// @ts-expect-error
enum GenericEnum<T> { // ERROR! Cannot find name 'T'.
    // @ts-expect-error
    FirstEnumValue
}

// Generic constraints
function doesSomethingWithLength<T extends { length: number }>(arg: T): T {
    console.log(arg.length);
    return arg;
}

doesSomethingWithLength([]); // OK
doesSomethingWithLength("abc"); // OK
// @ts-expect-error
doesSomethingWithLength(10); // ERROR! number does not have a .length property

// Class Types in Generics
// refer to class types by their constructor functions
class PersonClass {
    name: string;
}
class StudentClass extends PersonClass {
    studentId: number;
}

function factorySomething<T extends { new(): PersonClass }>(ctor: T): PersonClass {
    return new ctor();
}

factorySomething(PersonClass).name; // OK
factorySomething(StudentClass).name; // OK
// @ts-expect-error
factorySomething(StudentClass).studentId; // ERROR!

function factorySomethingFixed<T extends PersonClass>(ctor: new () => T): T {
    return new ctor();
}

factorySomethingFixed(StudentClass).studentId; // OK