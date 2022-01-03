import { LinkedList } from "./LinkedList";

export const generateRandomNumbersArray = (length: number, max: number) => {
  let arr: number[] = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * max));
  }
  return arr;
};

export const addRandomNumbersToLinkedList = (
  linkedList: LinkedList,
  length: number,
  max: number
) => {
  for (let i = 0; i < length; i++) {
    linkedList.add(Math.floor(Math.random() * max));
  }
};
