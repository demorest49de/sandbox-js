

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
