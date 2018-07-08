'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  let collectionC = [];
  for(let i in collectionA){
    for(let j in objectB.value){
      if(collectionA[i].key == objectB.value[j]){
        collectionC.push(collectionA[i].key);
        break;
      }
    }
  }
  return collectionC;
}
