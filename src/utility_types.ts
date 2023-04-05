// --- Array<>

//  Whenever we write out types like number[] or string[], that’s really just
// a shorthand for Array<number> and Array<string>.

function doSomethingWithArray<T>(arr: T[], callback: (item: T) => void) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

let myArray = [1, 2, 3];

doSomethingWithArray(myArray, (e) => console.log(e.toFixed()));

// --- ReadonlyArray<>

// A special type that describes arrays that shouldn’t be changed.
// ReadonlyArray has no representation at runtime, but is significant to TypeScript.
const myReadonlyArray: ReadonlyArray<number> = [1, 2, 3];

// @ts-expect-error
myReadonlyArray2.push(1); // Error: Property 'push' does not exist on type 'readonly number[]'.

// shorthand syntax for ReadonlyArray<Type> is readonly Type[].
const myReadonlyArray2: readonly number[] = [1, 2, 3];

// @ts-expect-error
myReadonlyArray2.push(1); // Error: Property 'push' does not exist on type 'readonly number[]'.

//  assignability isn’t bidirectional between regular Arrays and ReadonlyArrays.
// @ts-expect-error
const myArrayAssign: Array<number> = myReadonlyArray; // Error: Type 'readonly number[]' is not assignable to type 'number[]'.

// but you can assign a ReadonlyArray to a regular Array.
const myReadonlyArrayAssign: ReadonlyArray<number> = myArray;

// --- Tuple<>
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