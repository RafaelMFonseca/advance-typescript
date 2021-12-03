let hello = "hello world!";
// TypeScript was able to figure the type 'string'.
// That’s a feature, and it’s best not to add annotations when the type
// system would end up inferring the same type anyway.

// Rule: When possible, use the type parameter itself rather than constraining it
const firstElement1 = <T>(arr: T[]) => arr[0]; // Good
const firstElement2 = <T extends any[]>(arr: T) => arr[0]; // Bad
const f1 = firstElement1([1, 2, 3]); // f1 = number (good)
const f2 = firstElement2([1, 2, 3]); // f2 = any (bad)

// Rule: Always use as few type parameters as possible
// Good
const filter1 = <T>(arr: T[], func: (a: T) => boolean) => arr.filter(func);
// Bad, bacause have to manually specify an extra type argument for no reason.
// Func doesn’t do anything but make the function harder to read and reason about!
const filter2 = <T, R extends (a: T) => boolean>(arr: T[], func: R) => arr.filter(func);

console.log(filter1<number>([1, 2, 3], (n) => n > 3)); // Good, only one type parameter
console.log(filter2<number, (number) => boolean>([1, 2, 3], (n) => n > 3)); // Bar

// Rule: If a type parameter only appears in one location, strongly reconsider if you actually need it
// Type parameters are for relating the types of multiple values. If a type parameter is only used once
// in the function signature, it’s not relating anything.
const greet1 = <T extends string>(text: T) => console.log(text); // Bad
const greet2 = (text: string) => console.log(text); // Good

// When writing a function type for a callback, never write an optional parameter
// unless you intend to call the function without passing that argument
const forEach1 = <T>(arr: T[], callback: (e: T, i?: number) => void) => arr.forEach((e) => callback(e)); // Bad
const forEach2 = <T>(arr: T[], callback: (e: T, i: number) => void) => arr.forEach((e, i) => callback(e, i)); // Good

// Always prefer parameters with union types instead of overloads when possible
// Bad:
function length1(arr: string[]);
function length1(arr: any[]);
function length1(arr: any) { return arr.length; }

// Good:
function length2(arr: any[] | string) { return arr.length; }

// object is not Object. Always use object!

// The global type Function is an untyped function call and is generally best
// avoided because of the unsafe any return type.
// If you need to accept an arbitrary function but don’t intend to call it, the
// type () => void is generally safer.