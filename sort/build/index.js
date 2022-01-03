"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const Utils_1 = require("./Utils");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
// Testing NumbersCollection
const numbersCollection = new NumbersCollection_1.NumbersCollection((0, Utils_1.generateRandomNumbersArray)(10, 10));
console.log(numbersCollection.data);
numbersCollection.sort();
console.log(numbersCollection.data);
// Testing CharactersCollection
const charactersCollection = new CharactersCollection_1.CharactersCollection("Hello world!");
console.log(charactersCollection.data);
charactersCollection.sort();
console.log(charactersCollection.data);
// Testing LinkedList
const linkedList = new LinkedList_1.LinkedList();
(0, Utils_1.addRandomNumbersToLinkedList)(linkedList, 10, 100);
console.log("Unsorted:");
linkedList.print();
linkedList.sort();
console.log("Sorted:");
linkedList.print();
