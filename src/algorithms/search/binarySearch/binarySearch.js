/**
 * Binary Search Implementation
 * @param {*[]} sortedArray
 * @param {*} seekElement
 * @return {number}
 */

const binarySearch = (sortedArray, seekElement) => {
  if (!Array.isArray(sortedArray)) {
    return -1;
  }

  let startIndex = 0;
  let endIndex = sortedArray.length - 1;

  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

    // If we found the element, return the position
    if (sortedArray[middleIndex] === seekElement) {
      return middleIndex;
    }

    // Decide which half to choose, either left or right
    if (sortedArray[startIndex] < seekElement) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }
  return -1;
};

export default binarySearch;
