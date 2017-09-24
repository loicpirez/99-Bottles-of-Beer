#!/usr/bin/env nodejs

var os = require("os");

Array.from(new Array(99)).forEach((x, i) => {
    const beerOnWall = 99 - i;
    const takeOne = 99 - i - 1;
    console.log(beerOnWall + " bottles of beer on the wall, " + beerOnWall + " bottles of beer.");
    if (takeOne < 0) {
        console.log("Take one down and pass it around, " + takeOne + " bottles of beer on the wall.");
    }
    else {
        console.log("Take one down and pass it around, no more bottles of beer on the wall.");
    }
    console.log("");
});

console.log("No more bottles of beer on the wall, no more bottles of beer.");
console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
