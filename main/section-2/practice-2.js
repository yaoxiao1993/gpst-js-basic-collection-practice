'use strict';

module.exports = function countSameElements(collection) {
  let result = [];
  let obj = {};
  for(let i in collection){
    let num = collection[i].match(/[\d]+/);
    if(num){
      let letter = collection[i].match(/[a-z]+/);
      collection[i] = letter;
      for(let j = 1; j < num; j++){
        collection.push(letter);
      }
    } 
  }

  for(let i in collection){
    if(!obj[collection[i]]){
      obj[collection[i]] = 1;
    }else{
      obj[collection[i]]++;
    }
  }

  for(let k in obj ){
    let obj_in_arr = {};
    obj_in_arr.key = k;
    obj_in_arr.count = obj[k];
    result.push(obj_in_arr);
  }
  
  return result;
}
