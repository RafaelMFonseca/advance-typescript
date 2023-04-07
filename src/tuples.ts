// A tuple type is another sort of Array type that knows exactly how many elements it contains,
// and exactly which types it contains at specific positions.

// Tuples has no representation at runtime, but is significant to TypeScript.
type MyTuple = [number, string, boolean];

let myTuple: MyTuple = [1, "hello", true];

function doSomethingWithTuple(tuple: MyTuple) {
    console.log(tuple[0].toFixed());
    console.log(tuple[1].toLowerCase());
    console.log(tuple[2]);

    // We can also destructure tuples using JavaScript’s array destructuring
    const [num, str, bool] = tuple;
    console.log(num.toFixed(), str.toLowerCase(), bool);
}

doSomethingWithTuple(myTuple);

// If we try to index past the number of elements, we’ll get an error.
function doSomethingWithTuple2(tuple: [string, string]) {
    // @ts-expect-error
    console.log(tuple[2]); // Error: Property '2' does not exist on type '[string, string]'.
}

// Since not every user holds the same view of what’s obvious, it may be worth reconsidering
// whether using objects with descriptive property names may be better for your API.

// tuple types are equivalent to types which are versions of Arrays that declare properties for
// specific indexes, and that declare length with a numeric literal type.
interface NumberStringBoolean {
    0: number;
    1: string;
    2: boolean;

    length: 3;
}

const myTuple2: NumberStringBoolean = [1, "hello", true];

console.log(myTuple2[0].toFixed());
console.log(myTuple2[1].toLowerCase());
console.log(myTuple2[2]);

// Tuples can have optional properties by writing out a question mark (? after an element’s type).
// Optional tuple elements can only come at the end, and also affect the type of length.

type MyTyple3 = [number, string?, boolean?];

const myTuple3: MyTyple3 = [1];
const myTyple4: MyTyple3 = [1, "hello"];
const myTuple5: MyTyple3 = [1, "hello", true];

console.log(myTuple3[1]); // (property) 1?: string | undefined
console.log(myTuple3[2]); // (property) 2?: boolean | undefined

// Tuples can also have rest elements, which have to be an array/tuple type.
type MyTuple6 = [number, ...string[]];
type MyTuple7 = [number, ...string[], boolean];
type MyTuple8 = [...string[], number, boolean];

const myTuple6: MyTuple6 = [1, "hello", "world"];
const myTuple7: MyTuple7 = [1, "hello", "world", true];
const myTuple8: MyTuple8 = ["hello", "world", "earth", 1, true];

// Tuples types can be used in rest parameters and arguments.
function doSomethingWithTuples(...tuples: [string, number, ...string[]]) {
    const [str, num, ...rest] = tuples;

    console.log(str, num, rest);
}

doSomethingWithTuples("hello", 1, "world", "earth", "mars", "jupiter");

// is equivalent to:
function doSomethingWithTuples2(name: string, version: number, ...input: boolean[]) {
    const [str, num, ...rest] = [name, version, ...input];
    console.log(str, num, rest);
}

// tuples types have readonly variants
type MyTuple9 = readonly [number, string, boolean];

const myTuple9: MyTuple9 = [1, "hello", true];

// @ts-expect-error
myTuple9[0] = 2; // Cannot assign to '0' because it is a read-only property.

// @ts-expect-error
myTuple9.push(2); // Property 'push' does not exist on type 'readonly [number, string, boolean]'.

// Tuples can be used to represent the return value of a function.
function getTuple(): [number, string, boolean] {
    return [1, "hello", true];
}

// array literals with const assertions will be inferred with readonly tuple types
const myTuple10 = [4, 5, 6] as const;

// @ts-expect-error
myTuple10[0] = 2; // Cannot assign to '0' because it is a read-only property.


// ([4, 5, 6] as const) won’t be compatible with [number, number, number]
function mutableTuple([x, y, z]: [number, number, number]) {
    x = 1;
    y = 2;
    z = 3;
}

// @ts-expect-error
mutableTuple(myTuple10); // Argument of type 'readonly [4, 5, 6]' is not assignable to parameter of type '[number, number, number]'.