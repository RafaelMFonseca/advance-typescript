// You can use parameter destructuring to conveniently unpack objects provided as
// an argument into one or more local variables in the function body. 
// You can use a named type here as well:
type DestructType = { a: number; b: number; c: number; };
function sumSomething({ a, b, c }: DestructType) {
    console.log(a + b);
}

// Note that there is currently no way to place type annotations within destructuring patterns. 
// This is because the following syntax already means something different in JavaScript.
function drawOne({ shape, xPos: number = 10 }) {
    // @ts-expect-error
    console.log(xPos);
}

function drawTwo({ shape, xPos = 10 }:{ shape: PositionWorld, xPos: number }) {
    console.log(shape);
    console.log(xPos);
}
