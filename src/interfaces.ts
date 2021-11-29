// An interface declaration is another way to name an object type:
interface Animal {
    name: string;
}

interface Bear extends Animal {
    hibernate: boolean;
}

const bear: Bear = { name: 'Bear', hibernate: true, honey: true };

// An interface can be changed after being created, type cannot.
interface Bear {
    honey: boolean;
}