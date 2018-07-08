'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  let collectionC = [];
  let obj = {};
  for(let i in collectionA){
    if(!obj[collectionA[i]]){
      obj[collectionA[i]] = 1;
    }else{
      obj[collectionA[i]]++;
    }
  }

  for(let j in obj){
    let obj_in_arr = {};
    obj_in_arr.key = j;
    obj_in_arr.count = obj[j];
    collectionC.push(obj_in_arr);
  }

  for(let k in collectionC){
    for(let i in objectB.value){
      if(collectionC[k].key == objectB.value[i]){
        collectionC[k].count -= Math.floor(collectionC[k].count/3);
        break;
      }
    }
  }
  return collectionC;
}
