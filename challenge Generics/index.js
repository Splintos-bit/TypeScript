"use strict";
const gamesScores = [14, 21, 33, 42, 59];
const favoriteThings = ['raindrops on roses', 'whiskers on kittens', 'bright copper kettles', 'warm woolen mittens'];
const voters = [{ name: 'Alice', age: 42 }, { name: 'Bob', age: 77 }];
function getLastItem(array) {
    return array[array.length - 1];
}
console.log(getLastItem(gamesScores));
console.log(getLastItem(favoriteThings));
console.log(getLastItem(voters));
