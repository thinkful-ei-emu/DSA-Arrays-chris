// 5. URLify a string
const urlifyStr = str => {
  //return str.split(' ').join('%20');
  let result = [];
  for(let i=0; i<str.length; i++){
    if(str[i] === ' '){
      result.push('%20');
    }else {
      result.push(str[i]);
    }
  }
  return result.join('');
};
// O(n)
// console.log(urlifyStr('tauhida parveen'));

// 6. Filtering an array
// Imagine you have an array of numbers. Write an algorithm to 
// remove all numbers less than 5 from the array. DO NOT use 
// Array's built-in .filter() method here; write the algorithm from scratch.
const filterArr = arr => {
  let result = [];
  for(let i=0; i<arr.length; i++){
    if(arr[i] >= 5){
      result.push(arr[i]);
    }
  }
  return result;
};
// O(n)
// console.log(filterArr([1,2,3,4,5,6,7,8,9,0,10,9,8,7,6,5,4,3,2,1]));

// 7. Max sum in the array
// You are given an array containing positive and negative integers.
//  Write an algorithm which will find the largest sum in a continuous sequence.

// Input: [4, 6, -3, 5, -2, 1]
// Output: 12

const maxArrSum = arr => {
  let max = 0;
  for(let j=0; j<arr.length; j++){
    let testArr = arr.slice(j);
    let cur = 0;
    for(let i=0; i<testArr.length; i++){
      cur += testArr[i];
      if(cur >= max){
        max = cur;
      }
    }
  }
  return max;
};
// O(n^2)
// console.log(maxArrSum([1, -2, 5, -3, 6, 4]));

// 8. Merge arrays
// Imagine you have 2 arrays which have already been sorted. Write an 
// algorithm to merge the 2 arrays into a single array, which should also be sorted.

// Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
// Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]

function mergeNSort(arr1, arr2){
  let result = arr1.concat(arr2).sort((a,b)=>a-b);
  return result;
}
// console.log(mergeNSort([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

// 9. Remove characters
// Write an algorithm that deletes given characters from a string. For 
// example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" 
// and the characters to be removed are "aeiou", the algorithm should 
// transform the original string to "Bttl f th Vwls: Hw vs. Grzny". Do 
// not use Javascript's filter, split, or join methods.

// Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
// Output: 'Bttl f th Vwls: Hw vs. Grzny'

function rmvVowel(str, rmv){
  var regex = new RegExp(`[${rmv}]`, 'gi');
  return str.replace(regex, '');
}
// O(n)
// console.log(rmvVowel('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));

// 10. Products
// Given an array of numbers, write an algorithm to find out the products 
// of every other number except the number at each index.

// Input:[1, 3, 9, 4]
// Output:[108, 36, 12, 27]
function prodArray(arr){
  let result = [];
  let prod = 1;
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
      prod *= arr[j];
    }
    result.push(prod/arr[i]);
    prod = 1;
  }
  return result;
}
// O(n^2)
// console.log(prodArray([1, 3, 9, 4]));

// 11. 2D array
// Write an algorithm which searches through a 2D array, and whenever it 
// finds a 0 should set the entire row and column to 0.

// Input:
let array =    [[1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]];
// Output:
// [[0,0,0,0,0],
// [0,0,0,0,0],
// [0,0,1,1,0],
// [0,0,0,0,0],
// [0,0,1,1,0]];

function zeroArray(arr){ // O(2n^2) -> O(n^2)
  let zeros = [];
  for(let i=0; i< arr.length; i++){ // O(n) -> O(n^2)
    for(let j=0; j<arr[0].length; j++){ //O(n)
      if(arr[i][j] === 0){
        zeros.push([i,j]);
      }
    }
  }
  for(let n=0; n<arr.length; n++){//O(n) -> O(n^2)
    for(let m=0; m<zeros.length; m++){//O(n)
      arr[zeros[m][0]][n] = 0;
      arr[n][zeros[m][1]] = 0;
    }
  }
  return arr;
}
// O(n^2)
// console.log(zeroArray(array));

// 12. String rotation
// Given 2 strings, str1 and str2, write a program that checks if 
// str2 is a rotation of str1.

// Input: amazon, azonma
// Output: False

// Input: amazon, azonam
// Output: true
function stringRot(string, rotation){
  let str = string.split('');
  let rot = rotation.split('');
  for(let i=0; i<str.length; i++){
    str.splice(0,0,str.pop());
    let x = str.length;
    let y = 0;
    for(let j=0; j<str.length; j++){
      if(str[j] === rot[j]) y++;
    }
    if(x === y) return true;
  }
  return false;
}
// O(n^2)
// console.log(stringRot('amazon', 'azonam'));