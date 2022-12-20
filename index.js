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

// https://leetcode.com/problems/sum-of-all-odd-length-subarrays/submissions/

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

// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript
function spinWords(string){
  return string.split(" ").map(el => {return el.length >= 5 ? el.split('').reverse().join('') : el}).join(' ')
}

// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

function solution(nums){
  return nums ? nums.sort((a,b) =>  a - b) : []
}

// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript
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

// https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

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

// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

function solution(string) {
  return string.split('').map(el => {return el.toUpperCase() == el ? ' ' + el : el }).join('')
}

// https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript

function smallEnough(a, limit){
  
  for(var i = 0; i < a.length; i++){
    if(a[i] > limit){
      return false
    } 
  }
  return true
}

// https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript


function oddOrEven(array) {
   return array.reduce((a,b) => a+b,0) % 2 === 0 ? 'even' : 'odd'
}

// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/solutions/javascript

function solution(str, ending){
  return ending === str.slice(str.length - ending.length, str.length)
}

// https://www.codewars.com/kata/5f70c883e10f9e0001c89673/solutions/javascript

const flip=(d, a)=>{
  //TODO
  d == 'R' ? a = a.sort(function(a,b){return a-b}) : a = a.sort(function(a,b){return b-a})
  return a
}

// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
function findOdd(A) {

  var obj = {}
  var sol = 0
  
  A.forEach(el => {
    if(!(el in obj)){
      obj[el] = 1
    } else {
      obj[el] += 1
    }
  })

  Object.entries(obj).map(el => {
    if(parseInt(el[1]) % 2 != 0){
      sol = el[0]
       }
  })
    
  return parseInt(sol);
}

// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/solutions/javascript

function high(x){
  
  let highword = ''
  let highscore = 0
  
  let characters = ' abcdefghijklmnopqrstuvwxyz'
  characters = characters.split('')
  
  x = x.split(' ')
  
  x.forEach(el => {
    
    let count = 0
    let word = el.split('')
    
    word.forEach(el => {
      count += characters.indexOf(el)
    })
    
    if(highscore < count){
      highword = word.join('')
      highscore = count
    }
    
  })
  
  return highword
  
}

// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

function isPangram(string){
  let newArray = []
  
  string.split('').forEach(el => {
    if(!newArray.includes(el.toLowerCase()) && el.match(/[a-z]/i)){
      newArray.push(el.toLowerCase())
    }
  })
  
  
  return newArray.length === 26 ? true : false
}

function highAndLow(numbers){

  var arr = numbers.split(' ')
  
  var high = arr[0];
  var low = arr[0];

  arr.forEach(el => {
    el = parseInt(el)
    if(high < el) {
      high = el
    } 
    else if (el < low){
      low = el
    }
  })

  return high + ' ' + low
}

//Multiples of 3 or 5
// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
function solution(number){
  
  if(number > 0){
    var arr = []

    for (let i = 1; i < number; i++) {
      if(i%5 === 0 || i%3 === 0){
        arr.push(i)
      }
    }

    if (arr.length > 0) {
      return arr.reduce((sum, i) => sum + i)      
    }

  }
  return 0
}

//https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
function solution(string) {

  var chars = string.split('')
  
  for (let index = 0; index < string.length; index++) {
    console.log(chars[index], chars[index].toUpperCase())
    if(chars[index] === chars[index].toUpperCase()){
      chars.splice(index,1, ' ' + chars[index].toUpperCase())
    }
  }

  return chars.join('')
}

//https://www.codewars.com/kata/545a4c5a61aa4c6916000755/solutions/javascript
function gimme (triplet) {

  if(triplet[0] > triplet[1] && triplet[0] < triplet[2] || triplet[0] < triplet[1] && triplet[0] > triplet[2]){
      return 0;
  } else if(triplet[1] > triplet[0] && triplet[1] < triplet[2] || triplet[1] < triplet[0] && triplet[1] > triplet[2]){
      return 1
  } else {
      return 2
  }
  
}

// https://www.codewars.com/kata/586d6cefbcc21eed7a001155/solutions/javascript

function longestRepetition(s) {
  //check if exists
  if(s.length > 0) {
    
    //start with char at 0
    let temp = s[0]
    let longest = ''

    for(var i = 0; i < s.length; i++) {
      
      //compare current char to next
      if(s[i] == s[i+1]){
        //concat if same
        temp += s[i]
      } else {
        if(longest.length < temp.length) {
          longest = temp
        }
        temp = s[i+1]
      }
    }
    return [longest[0], longest.length];
  }
  return ['', 0]
}

// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

function moveZeros(arr) {
  return arr.filter(el => el !== 0).concat(arr.filter(el => el === 0))
}

// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

function generateHashtag (str) {
  var arr = str.split(' ')
  arr = arr.filter(el => el !== '')
  if(arr.length > 0) {
    var sol = ['#']
    arr.forEach(el => {
      sol.push(el[0].toUpperCase() + el.split('').slice(1).join(''))
    })
    sol = sol.join('')
    if(sol.length > 140) {
      return false
    } else {
      return sol
    }
  }
  
  return false
}

//https://www.codewars.com/kata/5ce399e0047a45001c853c2b/train/javascript

function partsSums(ls) {
  if (ls.length !=0) {
    var sum = ls.reduce((a,b) => (a+b))
    var arr = [sum]

    for(var i = 0; i < ls.length; i++) {
      arr.push(sum -= ls[i])
    }

    return arr 
  }
  return [0]
}

//https://www.codewars.com/kata/5202ef17a402dd033c000009/train/javascript

function titleCase(title, minorWords) {

  if(title) {
      var title = title.split(' ').map(el => el.toLowerCase())
      if(minorWords){
        var minorWords = minorWords.split(' ').map(el => el.toLowerCase())
      }
      var sol = []
      for(var i = 0; i < title.length; i++){  
        if(minorWords === undefined || !minorWords.includes(title[i]) || i === 0){          
          var temp = title[i].split('')
          var newWord = temp.shift().toUpperCase() + temp.join('').toLowerCase()
          sol.push(newWord)
        } else {
          sol.push(title[i])
        }
      }

      return sol.join(' ')
  }
  
  return ''
}

// https://www.codewars.com/kata/59f08f89a5e129c543000069/train/javascript

function dup(s) {
  let sol = []
  s.forEach(word => {
    var newS = ''
    for(let i = 0; i < word.length; i++) {
      if(!(word[i] === word[i+1])){
        newS += word[i]
      }
    }
    sol.push(newS)
  })
  return sol
};

//https://leetcode.com/problems/determine-if-string-halves-are-alike/submissions/

var halvesAreAlike = function(s) {
    /*
    split string in half and convert all to lowercase
        count vouls on left and right 
        if same return true
    */

    let count1 = 0;
    let count2 = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u']
    s = s.toLowerCase()
    let first = s.split('').slice(0, s.length/2)
    let second = s.split('').slice(s.length/2)

    first.forEach(el => {
      if(vowels.includes(el)){
        count1 += 1
      }
    })

    second.forEach(el => {
      if(vowels.includes(el)){
        count2 += 1
      }
    })

    if(count1 === count2) {
      return true
    } else {
      return false
    }
};

// https://leetcode.com/problems/sort-characters-by-frequency/submissions/

var frequencySort = function(s) {
  let obj = {}
  let sol = []
  
  let arr = s.split('')
  arr.forEach(el => {
      if(!obj[el]){
          obj[el] = 1
      } else {
          obj[el] += 1
      }
  })
  
  newArr = Object.entries(obj).sort((a,b) => b[1]-a[1])
  
  newArr.forEach(el => {
      sol.push(Array(el[1]).fill(el[0]).join(''))
  })
  
  return sol.join('')
  
};

//https://leetcode.com/problems/jewels-and-stones/submissions/855751555/

var numJewelsInStones = function(jewels, stones) {
  var sol = []

  stones.split('').forEach(el => {
      if(jewels.includes(el)) {
          sol.push(el)
      }
  })

  return sol.length
};

//https://leetcode.com/problems/contains-duplicate/submissions/859377500/

var containsDuplicate = function(nums) {
    return Array.from(new Set(nums)).length === nums.length ? false : true;
};

//https://leetcode.com/problems/majority-element/

var majorityElement = function(nums) {
    let obj = {}

    nums.forEach(el => {
        if(obj[el] == undefined) {
            obj[el] = 1
        } else {
            obj[el] +=1
        }
    })

    return Object.entries(obj).sort((a,b) => b[1] - a[1])[0][0]
};