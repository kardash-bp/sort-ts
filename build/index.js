"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection_1 = require("./CharactersCollection");
var NumbersCollection_1 = require("./NumbersCollection");
//* sorting numbers
var numArr = new NumbersCollection_1.NumbersCollection([10, 99, 4, -3, 0]);
numArr.sort();
console.log(numArr.data);
//* sorting string
var strToSort = new CharactersCollection_1.CharactersCollection('Red');
strToSort.sort();
console.log(strToSort.data);
