// if two objects have the same shape, they are considered to be of the same type
// TypeScript compares the shape of Vector2 to the shape of Point in the type-check.
// They have the same shape, so the code passes.

interface Point {
    x: number;
    y: number;
}

interface Vector2 {
    x: number;
    y: number;
}

const blockPos: Vector2 = { x: 10, y : 55 };

function logPoint(point: Point) {
    console.log(`${point.x}, ${point.y}`);
}

logPoint(blockPos);

// There is no difference between how classes and objects conform to shapes.

class VirtualPoint {
    constructor(public x: number, public y: number) { }
}

const worldPoint = new VirtualPoint(6, 43);

logPoint(worldPoint);