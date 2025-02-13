

{
  function reversuNumber(argNum) {
    let num = Math.abs(argNum);
    if (num === 0) return num;

    const nums = [];
    while (num > 0) {
      const remainder = Math.abs(num) % 10;
      // console.log(`remainder: `, remainder);
      nums.push(remainder);
      num = Math.trunc(num / 10);
      // console.log(`num: `, num);
    }
    const result = Number(nums.join(""));
    return argNum < 0 ? 0 - result : result;
  }

  console.log(`-321:`, reversuNumber(-321));
  console.log(`321:`, reversuNumber(321));
  console.log(`0:`, reversuNumber(0));
  console.log(`456:`, reversuNumber(456));
}

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
    const cache = new Map();

    return function (...args) {
      const key = JSON.stringify(args);

      if (cache.has(key)) {

        console.log(`${fn} with args ${args} got from cache..`);
        return cache.get(key);
      }

      const value = fn(...args);
      console.log(`${fn} with args ${args} saved to cache with result: ${value}`);
      cache.set(key, value);
      return value;
    };
  }

  function add(a, b) {
    return a + b;
  }

  const memoizedFunc = memoize(add);
  console.log(memoizedFunc(1, 2));
  console.log(memoizedFunc(1, 2));
  console.log(`==========`);
  console.log(memoizedFunc(3, 3));
  console.log(memoizedFunc(3, 3));
  console.log(memoizedFunc(3, 4));
  console.log(memoizedFunc(3, 4));
  console.log(memoizedFunc(3, 5));
  console.log(memoizedFunc(3, 6));
  console.log(memoizedFunc(3, 7));
  console.log(`==========`);
}
