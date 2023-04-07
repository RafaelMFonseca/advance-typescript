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

// -- Record<,>

type SpecialIconType = "home" | "search" | "settings";

const iconMap: Record<SpecialIconType, number> = {
    home: 1,
    search: 2,
    settings: 3,
};
