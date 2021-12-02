type StringArray = Array<string>;

let names: StringArray = [ "Mike", "John" ];

interface Bag<T> {
    add: (key: string, obj: T) => void;
    get: (key: string) => T;
}

// In TypeScript, generics are used when we want to declare a type parameter in the signature.
function firstOrUndefined<T>(arr: T[]): T | undefined {
    return arr[0];
}

// By adding a type parameter Type, we’ve created a link between the input of the function
// and the output.
// The type was inferred
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