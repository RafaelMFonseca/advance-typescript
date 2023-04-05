// Functions overloads
// function makeObj(n1: number, n2: number); // Error! types must match
function makeObj(a1: string): void; // types must match
function makeObj(b1: string, b2: number): void; // types must match

// The signature used to write the function body can’t be “seen” from the outside.
function makeObj(c1: string, c2?: number, c3?: Date): void { } // The implementation signature, can’t be called directly.

console.log(makeObj(''));
console.log(makeObj('a', 2));

// @ts-expect-error
console.log(makeObj('a', 2, new Date())); // Error!

// If you want it to be an overload signature, you have to write it twice:
function makeObj2(a: string);
function makeObj2(a: string, b: number);
function makeObj2(a: string, b: number, c: boolean); // Write twice!
function makeObj2(a: string, b?: number, c?: boolean): void { } // Can't be seen from outside. Not visible.

console.log(makeObj2('')); // OK!
console.log(makeObj2('', 2)); // OK!
console.log(makeObj2('', 2, true)); // OK!

// The implementation signature must also be compatible with the overload signatures.
function makeObj3(a: string);
function makeObj3(a: boolean);
function makeObj3(a: string | boolean);
function makeObj3(a: string | boolean): void { }

console.log(makeObj3('')); // OK!
console.log(makeObj3(true)); // OK!
