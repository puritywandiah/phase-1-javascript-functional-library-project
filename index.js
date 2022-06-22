const makeArray = (collection) => {
    if (!Array.isArray(collection)) {
      let newCollection = Object.values(collection)
      return newCollection
    } else {
      return collection
    }
  }
  
  const myEach = (collection, callback) => {
    let newCollection = makeArray(collection)
    for (const item of newCollection) {
      callback(item)
    }
    return collection
  }
  
  // myEach([1, 2, 3], alert);
  // myEach({ one: 1, two: 2, three: 3 }, alert);
  
  const myMap = (collection, callback) => {
    let newCollection = makeArray(collection)
    let newArray = []
    for (const item of newCollection) {
      newArray.push(callback(item))
    }
    return newArray
  }
  
  const myReduce = (collection, callback, acc) => {
    let newCollection = makeArray(collection)
    if (acc === undefined) {
      acc = newCollection[0]
    }
  
    // We want to accumulate the value starting a 0 
    // if the acc is defined
    // if the acc is not defined, we want to set it to 
    // the first item in newCollection and skip first iteration
    for (let i = (acc === newCollection[0]) ? 1 : 0; i < newCollection.length; i++) {
      // console.log("Before", i, acc)
      acc = callback(acc, newCollection[i], newCollection)
      // console.log("After call", i, acc)
    }
    return acc
  }
  
  const myFind = (collection, predicate) => {
    let newCollection = makeArray(collection)
    let value;
    for (const item of newCollection) {
      if (predicate(item)) {
        value = item
        break
      }
    }
    return value
  }
  
  const myFilter = (collection, predicate) => {
    let newCollection = makeArray(collection)
    let filteredArray = [];
    for (const item of newCollection) {
      if (predicate(item)) {
        filteredArray.push(item)
      }
    }
    return filteredArray
  }
  
  const mySize = (collection) => {
    let newCollection = makeArray(collection)
    let counter = 0
    for (const item of newCollection) {
      counter++
    }
    return counter
  }
  
  const myFirst = (array, n) => {
    if (n === undefined) {
      return array[0]
    } else {
      return array.slice(0, n)
    }
  }
  
  const myLast = (array, n) => {
    if (n === undefined) {
      return array[array.length - 1]
    } else {
      return array.slice(-n)
    }
  }
  
  const myKeys = (object) => {
    return Object.keys(object)
  }
  
  const myValues = (object) => {
    return Object.values(object)
  }