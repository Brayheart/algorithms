/**
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
 */
var runningSum = function(nums) {
	var init = nums.shift()
	var arr = [init]  // [1, 3, 6, 10]
    
    
    for(var i = 0; i < nums.length; i++ ){ 
    	var num = nums[i]					
        var otherNum = arr[arr.length - 1]  
        arr.push(num + otherNum)
    } 
  
  return arr
};
// runningSum([1,2,3,4])


function removeVowels(str){
  var arr = str.split('')
  var vowels = ['a','e','i','o','u']
  var solution = []

  for (let i = 0; i < arr.length; i++) {
    if(!vowels.includes(arr[i])){
      solution.push(arr[i])
    }
  }

  return solution
}

// removeVowels("balloon")

var isPalindrome = function(str) {
  var reversedString = str
    .split("")
    .reverse()
    .join("");

  if (reversedString === str) {
    return true;
  } else {``
    return false;
  }
};

isPalindrome("racecar")

//CTCI 1.1
//Create algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

function isUnique(str){
  var newArr = Array.from(new Set(str))
  console.log(newArr, str)
  if(newArr.length == str.length){
    return "true"
  }
  return "false"
}

// isUnique("string")
// isUnique("ballooon")