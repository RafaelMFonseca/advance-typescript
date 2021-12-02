// TypeScript uses that syntax space to let you declare the type for this in the function body.
interface User{
    name: string;
    admin: boolean;
}
interface Database {
    filterUsers(filter: (u: User) => boolean): User[];
    filterUsers2(filter: (this: User, index: number) => boolean): User[];
}

declare const getDatabase: () => Database;

const db = getDatabase();
const admins = db.filterUsers((u) => u.admin);
// Note that you need to use function and not arrow functions to get this behavior:
const admins2 = db.filterUsers2(() => this.admin); // this = globalThis, the containing arrow function captures the global value of 'this'.
const admins3 = db.filterUsers2(function(i) {
    console.log(i.toFixed()); // i = number
    return this.admin; // this = User
});