// The global type Function describes properties like
// bind, call, apply, and others present on all function
// values in JavaScript.

// This is an untyped function call and is generally best
// avoided because of the unsafe any return type.

function doSomething(f: Function, j: () => void) {
    console.log(f.apply({}));
    console.log(f.bind({}));
    console.log(f.call({}));

    console.log(j.apply({}));
    console.log(j.bind({}));
    console.log(j.call({}));

    // Function can always be called. These calls return any.
    return f(1, 2, 3);
}