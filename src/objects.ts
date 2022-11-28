function logPerson(person: { name: string; age?: number }) {
    console.log(person.name);
}

const person = {
    name: 'Mark'
};

logPerson(person);

interface PositionWorld {
    // Each property in an object type can specify a couple of
    // things: the type, whether the property is optional, and
    // whether the property can be written to.
    posX?: number;
    // We can mark properties as optional by adding a question
    // mark (?) to the end of their names. 
    posY?: number;
}

const position: PositionWorld = { posY: 20 };

// Pattern of setting defaults for unspecified values is so common
// that JavaScript has syntax to support it.

function paintShape({ posX = 0, posY = 0 }: PositionWorld) {
  console.log("x coordinate at", posX);
  console.log("y coordinate at", posY);
}