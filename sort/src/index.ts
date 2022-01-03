import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import {
  addRandomNumbersToLinkedList,
  generateRandomNumbersArray,
} from "./Utils";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// Testing NumbersCollection
const numbersCollection = new NumbersCollection(
  generateRandomNumbersArray(10, 10)
);
console.log(numbersCollection.data);
numbersCollection.sort();
console.log(numbersCollection.data);

// Testing CharactersCollection
const charactersCollection = new CharactersCollection("Hello world!");
console.log(charactersCollection.data);
charactersCollection.sort();
console.log(charactersCollection.data);

// Testing LinkedList
const linkedList = new LinkedList();
addRandomNumbersToLinkedList(linkedList, 10, 100);
console.log("Unsorted:");
linkedList.print();
linkedList.sort();
console.log("Sorted:");
linkedList.print();
