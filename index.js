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

//https://leetcode.com/problems/sum-of-all-odd-length-subarrays/submissions/

var sumOddLengthSubarrays = function(arr) {
    //find subarrays with odd numbered length values
      //add values together
  var oddSubArrays = [];
  var sum = 0

  for(var i = 0; i <= arr.length; i++){
    for(var j = 1; j <= arr.length; j++){
      if(arr.slice(i,j).length % 2 != 0){
        oddSubArrays.push(arr.slice(i,j))
      }
    }
  }
  
  i = 0
  while(i < oddSubArrays.length){
    // console.log(oddSubArrays[i])
    oddSubArrays[i].forEach(el => {
      sum += el
    })
    i++
  }

  return sum
};

function getMissingElement(superImportantArray){
  var int 
  
  for(var i = 0; i < 10; i++){
    if(!superImportantArray.includes(i)){
      int = i
    }
  }
  
  return int
}

function highAndLow(numbers){
  var nums = numbers.split(' ')
  var newNums = []

  nums.forEach(el => {
    newNums.push(parseInt(el))
  })
  
  var high = newNums[0]
  var low = newNums[0]
  
  newNums.forEach(el => {
     if(high < el){
       high = el
     } else if(low > el){
       low = el
     }
  })
  
  return high + ' ' + low
}