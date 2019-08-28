const myArray = require('./Array');

function main(){
  myArray.SIZE_RATIO = 3;
    
  // Create an instance of the Array class
  let arr = new myArray();
    
  // Add an item to the array
//   arr.push(3); //myArray { length: 1, _capacity: 3, ptr: 0 }
//   arr.push(5);
//   arr.push(15);
//   arr.push(19);
//   arr.push(45);
//   arr.push(10); //myArray { length: 6, _capacity: 12, ptr: 3 }
  
//   arr.pop();
//   arr.pop();
//   arr.pop(); //{ length: 3, _capacity: 12, ptr: 3 }
  arr.push('tauhida'); //{ length: 1, _capacity: 3, ptr: 0 } or { length: 4, _capacity: 12, ptr: 3 } 
  console.log(arr);
  console.log(arr.get(0)); //when done for tauhida, it returned NaN due to the memory only allowing numbers (up to 64)
}
    
main();

//purpose of _resize is to copy and paste the array to the new location and
//change the ptr direction to the new array location