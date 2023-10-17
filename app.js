const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);

function findMin(...args) {
    // Use the spread operator to pass all arguments as an array to Math.min
    return Math.min(...args);
  }
  
  function doubleAndReturnArgs(arr, ...args) {
    // Use the spread operator to combine the original array with the doubled arguments
    const doubledArgs = args.map(arg => arg * 2);
    return [...arr, ...doubledArgs];
  }
  
  const removeRandom = (items) => {
    const indexToRemove = Math.floor(Math.random() * items.length);
    return [...items.slice(0, indexToRemove), ...items.slice(indexToRemove + 1)];
  };
  const extend = (array1, array2) => [...array1, ...array2];
  const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val });
  const removeKey = (obj, key) => {
    const newObj = { ...obj };
    delete newObj[key];
    return newObj;
  };
  const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });
  const update = (obj, key, val) => ({ ...obj, [key]: val });
