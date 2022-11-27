// void represents the return value of functions which don’t return a value
function noop() {
    return;
}

// In JavaScript, a function that doesn’t return any value will implicitly return the value undefined.
// However, void and undefined are not the same thing in TypeScript.

// (() => void), does not force functions to not return something
// when implemented, it can return any other value, but it will be ignored.
type voidFunc = () => void;

const voidFn1: voidFunc = () => { return true; };
const voidFn2: voidFunc = () => { return 0; };
const voidFn3: voidFunc = () => { return "some text"; };

const srcNums = [ 1, 2, 3 ];
const dstNums = [ 0 ];

// This behavior exists so that the following code is valid even though 
// Array.prototype.push returns a number and the Array.prototype.forEach 
// method expects a function with a return type of void.
srcNums.forEach(el => dstNums.push(el));

// When a literal function definition has a void return type, that
// function must not return anything.
// @ts-expect-error
const voidFn4 = (): void => { return "some text"; }; // ERROR!