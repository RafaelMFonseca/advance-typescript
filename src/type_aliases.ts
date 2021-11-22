// A type alias is a name for any type.
// If you would like a heuristic, use interface until you need to use features from type.
type Vector3 = {
    x: number;
    y: number;
    z: number;
};

interface Point3 {
    x: number;
    y: number;
    z: number;
}

function printPoint3(point: Point3) { }

let v3: Vector3 = { x: 10, y: 20, z: 30 };

printPoint3(v3); // works because TypeScript is a structurally typed type system

// Almost all features of an interface are available in type, the key distinction
// is that a type cannot be re-opened to add new properties vs an interface which
// is always extendable.

// Extending a type via intersections
type Vector4 = Vector3 & {
    w: number;
};

const v4: Vector4 = { x: 10, y: 20, z: 30, w: 40 };

// type Vector4 = { w: number; }; Erro! Duplicate identifier