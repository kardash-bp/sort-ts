"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection_1 = require("./CharactersCollection");
var NumbersCollection_1 = require("./NumbersCollection");
var Sorter_1 = require("./Sorter");
//* sorting numbers
var numArr = new NumbersCollection_1.NumbersCollection([10, 99, 4, -3, 0]);
var sortNum = new Sorter_1.Sorter(numArr);
sortNum.sort();
console.log(numArr.data);
//* sorting string
var strToSort = new CharactersCollection_1.CharactersCollection('Red');
var sorted = new Sorter_1.Sorter(strToSort);
sorted.sort();
console.log(strToSort.data);
