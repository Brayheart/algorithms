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

// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

//Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

var shuffle = function(nums, n) {
  arr1 = nums.splice(n)
  arr2 = nums
  newArr = []

  console.log(arr1, arr2)
  
  for(var i = 0; i < nums.length; i++){
    newArr.push(arr2[i])
    newArr.push(arr1[i])
  }

  return newArr
};

var maximumWealth = function(accounts) {
    count = 0
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  accounts.forEach(el => {
    if(el.reduce(reducer) > count){
      count = el.reduce(reducer)
    }
  })
    
  return count
};

function fizzbuzz(){
  for(var i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
      console.log("fizzbuzz")
    } else if (i % 3 == 0) {
      console.log("fizz")
    } else if (i % 5 == 0) {
      console.log("buzz")
    } else {
      console.log(i)
    }
  }
}