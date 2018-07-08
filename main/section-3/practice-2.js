'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  for(let i in collectionA){
    for(let j in objectB.value){
      if(collectionA[i].key == objectB.value[j]){
        collectionA[i].count -= Math.floor(collectionA[i].count/3)
      }
    }
  }
  return collectionA;
}
