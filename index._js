

{
  function twoSum(nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
      let diff = target - nums[i];

      if (map.has(diff)) {
        return [map.get(diff), i];
      }

      map.set(nums[i], i);
    }

    return [];
  }

  let nums = [2, 7, 11, 15];
  let target = 9;

  console.log(twoSum(nums, target));
}

{
 function memoize(fn) {
   const cache = new Map()
   //... rest - собирает в массив все аргументы
   return function (...args){
    const key = JSON.stringify(args)
     const timerLabel = `Execution Time for ${key}`
     console.time(timerLabel)
     if(cache.has(key)){
       console.log('Returning from cache...');
       console.timeEnd(timerLabel)
       return cache.get(key)
     }

     // spread
     const result = fn(...args)
     cache.set(key, result)
     console.timeEnd(timerLabel)
     return result
   }
 }

 function  add(a,b){
   console.log('calc...');
   return a+b
 }

 const memoizedFunc = memoize(add)
  console.log(memoizedFunc(1,2));
  console.log(memoizedFunc(1,2));
  console.log(memoizedFunc(3,4));
}
