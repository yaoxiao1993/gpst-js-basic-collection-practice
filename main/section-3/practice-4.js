'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  let collectionC = [];
  let obj = {};
  for(let i in collectionA){
    let num = collectionA[i].match(/[\d]+/);
    if(num){
      let letter = collectionA[i].match(/[a-z]+/);
      collectionA[i] = letter;
      for(let j = 1; j < num ; j ++){
        collectionA.push(letter);
      }
    }
  }

  for(let i in collectionA){
    if(!obj[collectionA[i]]){
      obj[collectionA[i]] = 1;
    }else{
      obj[collectionA[i]]++;
    }
  }
  
  for(let  i in obj){
    let obj_in_arr = {};
    obj_in_arr.key = i;
    obj_in_arr.count = obj[i];
    collectionC.push(obj_in_arr);
  }

  for(let i in collectionC){
    for(let j in objectB.value){
      if(collectionC[i].key == objectB.value[j]){
        collectionC[i].count -= Math.floor(collectionC[i].count/3);
        break;
      }
    }
  }
  return collectionC;
}
