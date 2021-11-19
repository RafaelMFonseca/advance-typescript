function logPerson(person: { name: string; age?: number }) {
    console.log(person.name);
}

const person = {
    name: 'Mark'
};

logPerson(person);