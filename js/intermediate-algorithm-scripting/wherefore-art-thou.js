/*function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function(obj) {
    for (var i = 0; i < srcKeys.length; i++) {
      if (
        !obj.hasOwnProperty(srcKeys[i]) ||
        obj[srcKeys[i]] !== source[srcKeys[i]]
      ) {
        return false;
      }
    }
    return true;
  });
}
*/

/*
function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  return collection.filter(function(obj) {
    return srcKeys.every(function(key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}
*/

/*
function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function(obj) {
    return srcKeys
      .map(function(key) {
        return obj.hasOwnProperty(key) && obj[key] === source[key];
      })
      .reduce(function(a, b) {
        return a && b;
      });
  });
}
*/

function whatIsInAName(collection, source) {
    const arr = []

    for (let i = 0; i < collection.length; i++) {
        let obj = collection[i]
        console.log(obj)

        let objKeys = Object.keys(obj)
        let srcKeys = Object.keys(source)

        console.log('obj', objKeys)
        console.log('src', srcKeys)

        if (
            srcKeys.every((srcKey) => {
                return objKeys.includes(srcKey)
            })
        ) {
            console.log('PROP MATCH')

            let isSourceInCollection = true
            srcKeys.forEach((srcKey) => {
                if (obj[srcKey] != source[srcKey]) {
                    isSourceInCollection = false
                }
            })

            if (isSourceInCollection == true) {
                arr.push(obj)
            }
        }
    }
    console.log(arr)
    return arr
}

whatIsInAName(
    [
        { first: 'Romeo', last: 'Montague' },
        { first: 'Mercutio', last: null },
        { first: 'Tybalt', last: 'Capulet' },
    ],
    { last: 'Capulet' }
)
