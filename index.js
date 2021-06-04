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

// letters to numbers

function switcher(x){
  var letters = '0zyxwvutsrqponmlkjihgfedcba!? '.split("")
  console.log(letters[26])
  var word = []
  
  x.forEach(el => {
    word.push(letters[el])
  })

   return word.join('')
}

function accum(s) {
  var arr = s.split('')
  var solution = [arr[0].toUpperCase()]


  for (var i = 1; i < arr.length; i++) {
    solution.push([arr[i].toUpperCase() + arr[i].repeat(i).toLowerCase()])
  }

  return solution.join('-')
}

//https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript
function spinWords(string){
  return string.split(" ").map(el => {return el.length >= 5 ? el.split('').reverse().join('') : el}).join(' ')
}

//https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

function solution(nums){
  return nums ? nums.sort((a,b) =>  a - b) : []
}

//https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript
function repeatStr (n, s) {
  return s.repeat(n);
}

// https://www.codewars.com/kata/514b92a657cdc65150000006/solutions/javascript

function solution(number){
  var arr = []
  
  for(var i = 0; i < number; i++){
    (i % 3 == 0 || i % 5 == 0) ? arr.push(i) : ""
  }
  
  return arr.length ? arr.reduce((acc, el) => acc + el) : 0
}

//https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

function lovefunc(flower1, flower2){
  // moment of truth
  return flower1 % 2 === 0 && flower2 % 2 === 0 || flower1 % 2 != 0 && flower2 % 2 != 0 ? false : true
}

//Better version
function lovefunc(flower1, flower2){
  // moment of truth
  return !(flower1 % 2 === 0 && flower2 % 2 === 0 || flower1 % 2 != 0 && flower2 % 2 != 0);
}

function greet(name){
  //your code here
  return `Hello, ${name} how are you doing today?`
}

//https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

function solution(string) {
  return string.split('').map(el => {return el.toUpperCase() == el ? ' ' + el : el }).join('')
}

//https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript

function smallEnough(a, limit){
  
  for(var i = 0; i < a.length; i++){
    if(a[i] > limit){
      return false
    } 
  }
  return true
}

//https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript


function oddOrEven(array) {
   return array.reduce((a,b) => a+b,0) % 2 === 0 ? 'even' : 'odd'
}

//https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/solutions/javascript

function solution(str, ending){
  return ending === str.slice(str.length - ending.length, str.length)
}

//https://www.codewars.com/kata/5f70c883e10f9e0001c89673/solutions/javascript

const flip=(d, a)=>{
  //TODO
  d == 'R' ? return a.sort(function(a,b){return a-b}) : return a.sort(function(a,b){return b-a})
  
}