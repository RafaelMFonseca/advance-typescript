// Much like variable type annotations, you usually don’t need a return
// type annotation because TypeScript will infer the function’s return
// type based on its return statements. 
function doSomethingHere(n: number): boolean {
    return true;
}

// contextual typing = TypeScript inferred type the types of the
// forEach function along with the inferred type of the array.
const brNames = ['Lucas', 'Carlos', 'Silva'];
brNames.forEach(n => console.log(n)); // n = string

// The simplest way to describe a function is with a function type expression.
type GreetFunction = (greet: string) => boolean;

// functions can have properties in addition to being callable
type GreetNameFunction = {
    description: string;
    // You can combine call and construct signatures in the same type arbitrarily:
    // For call Signatures use : between the parameter list and the return type rather than =>
    (greet: string): void; 
    // You can write a construct signature by adding the new keyword in front of a call signature
    new (): { value: boolean };
};

function doGreet(fn: GreetNameFunction) {
    console.log(fn(''));
    console.log(new fn().value);
    console.log(fn.description);
}

// Optional parameters
// unspecified parameters in JavaScript get the value undefined
function greetOpt(x?: number) { // x = number | undefined
    console.log(x);
}

// You can also provide a parameter default:
function greetNotOp(x: number = 10) { 
    // x cannot be x? because any undefined argument will be replaced with 10
    console.log(x);
}

// When a parameter is optional, callers can always pass undefined, as this simply
// simulates a “missing” argument:
greetOpt(); // logs 10
greetOpt(20); // logs 20
greetOpt(undefined); // logs 10

// Optional parameters
// What this actually means is that callback might get invoked with one argument.
function myForEach<T>(arr: T[], callback: (item: T, index?: number) => void) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]); // invoked with one argument
    }
}
console.log(myForEach([1, 2, 3], (e, i) => console.log(i!.toFixed()))); // i = number | undefined
