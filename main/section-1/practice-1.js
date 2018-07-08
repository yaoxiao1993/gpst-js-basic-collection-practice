'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  let collectionC = [];
  for(let i in collectionA){
    for(let j in collectionB){
      if(collectionA[i] == collectionB[j]){
        collectionC.push(collectionA[i]);
        break;
      }
    }
  }
  return collectionC;
}
