// Rest Parameters and Arguments

// We can also define functions that take an unbounded number of arguments
// using rest parameters.

// A rest parameter appears after all other parameters, and uses the ... syntax:

// In TypeScript, the type annotation on these parameters is implicitly any[] instead
// of any, and any type annotation given must be of the form Array<T>or T[], or a
// tuple type.
function multiply(n: number, ...m: number[]) {
    return m.map(x => n * x);
}

// Rest Arguments

// A spread argument must either have a tuple type or be passed to a rest parameter.

// TypeScript does not assume that arrays are immutable. 
// @ts-expect-error
console.log(Math.atan2(...[1, 2])); // ERROR! Array may be changed

const r: [ number, number ] = [1, 2];
console.log(Math.atan2(...r)); // OK!

const r2 = [1, 2] as const; // it is a read-only array
// @ts-expect-error
r2.push(3); // ERROR!
console.log(Math.atan2(...r2)); // OK!