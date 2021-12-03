// The unknown type represents any value. This is similar to the any type, but
// is safer because it’s not legal to do anything with an unknown value:

const u1: unknown = {
    name: 'Mark',
    admin: true,
    isAdmin: function() {
        return this.admin === true;
    }
};

// @ts-expect-error
console.log(u1.name); // Object is of type 'unknown'.

// And typescript doesn't allow you to use a variable of unknown type unless
// you either cast the variable to a known type or narrow its type.

const u2: unknown = 10;

if (typeof u2 === 'number') {
    console.log(u2.toFixed()); // OK!
}