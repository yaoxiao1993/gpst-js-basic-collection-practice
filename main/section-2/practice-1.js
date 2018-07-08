'use strict';

class mapcollection{
  constructor(collection){
    this.collection = collection;
  }

  countSameElements(collection){
    let result_collection = [];
    let obj = {};
    for(let i in collection){
      if(!obj[collection[i]]){
        obj[collection[i]] = 1;
      }else{
        obj[collection[i]]++;
      }
    }

    for(let i in obj){
      let obj_in_array = {};
      obj_in_array.key = i;
      obj_in_array.count = obj[i];
      result_collection.push(obj_in_array);
    }
    return result_collection;
  }
}

module.exports = mapcollection;