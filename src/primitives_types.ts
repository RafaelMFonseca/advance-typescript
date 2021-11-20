const p1: number = 10;
const p2: string = 'word';

// The type boolean itself is actually just an alias for the union true | false.
const p3: boolean = true;

// From ES2020 onwards:
// BigInt = a primitive in JavaScript used for very large integers
const p4: bigint = BigInt(100);
const p5: bigint = 100n;

// Symbol = a primitive in JavaScript used to create a globally unique reference
const p6 = Symbol('name');