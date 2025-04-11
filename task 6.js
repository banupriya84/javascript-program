function removeDuplicatesAndSortDescending(arr) {
    // Remove duplicates using Set, then convert back to array
    const uniqueArr = [...new Set(arr)];
  
    // Sort in descending order
    uniqueArr.sort((a, b) => b - a);
  
    console.log(uniqueArr);
  }

  removeDuplicatesAndSortDescending([1, 6, 8, 1, 2, 6, 9]);