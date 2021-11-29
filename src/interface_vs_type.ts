// Almost all features of an interface are available in type, the key distinction
// is that a type cannot be re-opened to add new properties vs an interface which
// is always extendable.

// Extending a type via intersections
type Vector4 = Vector3 & {
    w: number;
};

const v4: Vector4 = { x: 10, y: 20, z: 30, w: 40 };

// type Vector4 = { w: number; }; Erro! Duplicate identifier