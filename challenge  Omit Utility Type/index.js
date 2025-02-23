"use strict";
let nextUserId = 1;
const users = [
    { id: nextUserId++, username: 'john', role: 'member' },
    { id: nextUserId++, username: 'jane', role: 'contributor' }
];
function UpateUser(id, updates) {
    const foundUser = users.find(user => user.id === id);
    if (!foundUser) {
        console.log('User not found !');
        return;
    }
    Object.assign(foundUser, updates);
}
function addNewUser(newUser) {
    const user = Object.assign({ id: nextUserId++ }, newUser);
    users.push(user);
    return user;
}
addNewUser({ username: 'joe', role: 'member' });
console.log(users);
