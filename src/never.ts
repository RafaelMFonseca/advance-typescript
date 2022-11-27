// When narrowing, you can reduce the options of a union to a point
// where you have removed all possibilities and have nothing left.
// In those cases, TypeScript will use a never type to represent a 
// state which shouldn’t exist.

// The never type represents values which are never observed.
// In a return type, this means that the function throws an exception
// or terminates execution of the program.

interface Triangle {
    sides: 'three';
}

interface Square {
    sides: 'four';
}

type Form = Triangle | Square;

// never also appears when TypeScript determines there’s nothing left in a union.
function logSide(form: Form) {
    if (form.sides == 'four') {
        console.log(form.sides);
        return;
    } else if (form.sides == 'three') {
        console.log(form.sides);
        return;
    }
    const result = form;
    console.log(result); // form = never
}

interface Hexagon {
    sides: 'six';
}

// The never type is assignable to every type; however, no type
// is assignable to never (except never itself). T
let aNonNever: number = 10;
// @ts-expect-error
let aNever: never = undefined;

aNonNever = aNever; // OKAY! can assign any given `never` value to a number.
// @ts-expect-error
aNever = aNonNever; // ERROR! aNonNever can be, among other values, 1, which is can not be assigned to never.

type ComplexForm = Triangle | Square | Hexagon;

function logComplexSide(form: ComplexForm) {
    if (form.sides == 'four') {
        console.log(form.sides);
        return;
    } else if (form.sides == 'three') {
        console.log(form.sides);
        return;
    }
    // @ts-expect-error
    const result: never = form; // ERROR!
    console.log(form); // form = Hexagon
}

function returnNever(): boolean {
    return (undefined as never); // OK, can assign never to boolean.
}