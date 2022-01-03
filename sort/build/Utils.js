"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRandomNumbersToLinkedList = exports.generateRandomNumbersArray = void 0;
const generateRandomNumbersArray = (length, max) => {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * max));
    }
    return arr;
};
exports.generateRandomNumbersArray = generateRandomNumbersArray;
const addRandomNumbersToLinkedList = (linkedList, length, max) => {
    for (let i = 0; i < length; i++) {
        linkedList.add(Math.floor(Math.random() * max));
    }
};
exports.addRandomNumbersToLinkedList = addRandomNumbersToLinkedList;
