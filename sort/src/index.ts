class Sorter {
  constructor(public collection: number[]) {}

  sort(): void {
    this.quicksortSubarray(this.collection, 0, this.collection.length - 1);
  }

  private partition(theArray: number[], startIndex: number, endIndex: number) {
    let pivot = theArray[endIndex];
    let leftIndex = startIndex;
    let rightIndex = endIndex - 1;

    while (leftIndex <= rightIndex) {
      // Walk until we find something on the left side that belongs
      // on the right (less than the pivot).
      while (leftIndex <= endIndex && theArray[leftIndex] < pivot) {
        leftIndex += 1;
      }

      // Walk until we find something on the right side that belongs
      // on the left (greater than or equal to the pivot).
      while (rightIndex >= startIndex && theArray[rightIndex] >= pivot) {
        rightIndex -= 1;
      }

      // Swap the items at leftIndex and rightIndex, moving the element
      // that's smaller than the pivot to the left half and the element
      // that's larger than the pivot to the right half.
      if (leftIndex < rightIndex) {
        const tmp = theArray[leftIndex];
        theArray[leftIndex] = theArray[rightIndex];
        theArray[rightIndex] = tmp;
      }

      // Unless we've looked at all the elements in the array and are
      // done partitioning. In that case, move the pivot element into
      // its final position.
      else {
        const tmp = theArray[leftIndex];
        theArray[leftIndex] = theArray[endIndex];
        theArray[endIndex] = tmp;
      }
    }

    return leftIndex;
  }

  private quicksortSubarray(
    theArray: number[],
    startIndex: number,
    endIndex: number
  ) {
    // Base case: array with 0 or 1 elements.
    if (startIndex >= endIndex) {
      return;
    }

    // Divide the array into two smaller subarrays
    const pivotIndex = this.partition(theArray, startIndex, endIndex);

    // Recursively sort each subarray
    this.quicksortSubarray(theArray, startIndex, pivotIndex - 1);
    this.quicksortSubarray(theArray, pivotIndex + 1, endIndex);
  }
}

let arr: number[] = [];
for (let i = 0; i < 100; i++) {
  arr.push(Math.floor(Math.random() * 100));
}

const sorter = new Sorter(arr);
sorter.sort();
console.log(sorter.collection);
