'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  let collectionC = [];
  for(let i in collectionA){
    for(let j in objectB.value){
      if(collectionA[i] == objectB.value[j]){
        collectionC.push(collectionA[i]);
        break;
      }  
    }
  }
  return collectionC;
}
