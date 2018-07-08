'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  let collectionC = [];
  for(let i in collectionA){
    for(let j in collectionB){
      for(let k in collectionB[j]){
        if(collectionA[i] == collectionB[j][k]){
          collectionC.push(collectionA[i]);
          break;
        }
      }
    }
  }
  return collectionC;
}
