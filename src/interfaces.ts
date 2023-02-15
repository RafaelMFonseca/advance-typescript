// An interface declaration is another way to name an object type:
interface Animal {
    name: string;
}

interface Creature {
    specie: string;
}

// The extends keyword on an interface allows us to effectively copy members
// from other named types, and add whatever new members we want. 
// interfaces can also extend from multiple types.
interface Bear extends Animal, Creature {
    hibernate: boolean;
}

const bear: Bear = { name: 'Bear', hibernate: true, specie: 'Animal', honey: true };

// An interface can be changed after being created, type cannot.
interface Bear {
    honey: boolean;
}