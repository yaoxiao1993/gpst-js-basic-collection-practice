'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  //let result = [];
  for(let i in collectionA){
    for(let j in objectB.value){
      if(collectionA[i].key == objectB.value[j]){
        collectionA[i].count --;
        break;
      }
    }
  }
  return collectionA;
}
