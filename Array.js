const Memory = require('./memory');
let memory = new Memory();

class myArray {
  
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length);
  }

  log(str){
    console.log(str);
  }

  push(value) {
    if(this.length >= this._capacity) {
      this._resize((this.length + 1) * myArray.SIZE_RATIO);
    }
    
    memory.set(this.ptr + this.length, value);
    this.length++;
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if(this.ptr === null){
      throw new Error('Out of memory');
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity = size;
  }

  get(idx) {
    if(idx < 0 || idx >= this.length){
      throw new Error('Index error');
    }
    return memory.get(this.ptr + idx);
  }

  pop() {
    if(this.length == 0) {
      throw new Error('Index error');
    }
    const value = memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }

  insert(idx, value) {
    if(idx < 0 || idx >= this.length){
      throw new Error('Index error');
    }
    if (this.length >= this._capacity){
      this._resize((this.length + 1) * myArray.SIZE_RATIO);
    }

    memory.copy(this.ptr + idx + 1, this.ptr + idx, this.length - idx);
    memory.set(this.ptr + idx, value);
    this.length++;
  }

  remove(index) {
    if(index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
    this.index--;
  }
}
myArray.SIZE_RATIO = 3;

module.exports = myArray;