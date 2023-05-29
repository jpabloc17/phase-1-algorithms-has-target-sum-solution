function hasTargetSum(array, target) {
  const seenNumber = {};
  for (const number of array) {
    const complement = target - number;
    if (seenNumber[complement]) return true;
    seenNumber[number] = true;
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  Runtime: O(n)
  Space: O(n)
*/

/* 
  Add your pseudocode here
  -create an object to keep track of all the numbers we've seen
  -iterate through each number over the array 
  -for the current number, identify a complementary number that adds to the target
  (for example: if our number is 2, and the target is 5, the complementary number is 3)
  -check if any of the keys in our object is the complement to the current number
  -if so, return true
  -save the current number as the key on our object so we can check it later against other numbers
  -if we reach the end of the array, return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-1, 7, 6, 2, 5], 5));
}

module.exports = hasTargetSum;
