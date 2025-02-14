

{
  /**
   * @param {number[]} arr
   * @param {Function} fn
   * @param {number} init
   * @return {number[]}
   */
  var filter = function (arr, fn, init) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
      init = fn(init, arr[i]);
    }
    return init;
  };

  const fn1 = (acc, cur) => acc + cur;
  console.log(filter([1, 2, 3, 4], fn1, 0));

  const fn2 = (acc, cur) => acc + cur * cur;
  console.log(filter([1, 2, 3, 4], fn2, 100));

  const fn3 = (acc, cur) => 0;
  console.log(filter([], fn3, 25));
}

{
  /**
   * @param {number[]} arr
   * @param {Function} fn
   * @return {number[]}
   */
  var filter = function (arr, fn) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
      if(fn(arr[i], i)) {
        newArray.push(arr[i]);
      }
    }
    return newArray;
  };

  const array = [0,10, 20, 30];
  const fn1 = (n) => n > 10;
  console.log(filter(array, fn1));

  const fn2 = (n, i) => i === 0;
  console.log(filter(array, fn2));

  const fn3 = (n) => n + 1;
  console.log(filter(array, fn3));
}

// без массива зависимостей - юзЕффект вызовется только при 1 рендере
// дидМаунт, дидАпдейт, виллАнмаунт
// пустой массив означает что эффект сработает 1 раз - это  дидМаунт
// Непустой массив означает что эффект сработает 1 раз - это  дидАпдейт
// Функция очистки которую возвращает юзЕффект - это  виллАнмаунт

{
  /**
   * @param {number[]} arr
   * @param {Function} fn
   * @return {number[]}
   */
  var map = function (arr, fn) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
      // если в колбек не передаются аргументы то они станут undefined
      newArray.push(fn(arr[i], i));
    }
    return newArray;
  };

  const array = [1, 2, 3, 4];
  const fn1 = (n) => n + 1;
  console.log(map(array, fn1));

  const fn2 = (n, i) => n + i;
  console.log(map(array, fn2));

  const fn3 = () => 42;
  console.log(map(array, fn3));
}

// задача на промисы и асинхроноостбь
{
  async function asyncFunction1() {
    return new Promise(resolve => setTimeout(() => resolve('First done'), 1000));
  }

  async function asyncFunction2() {
    return new Promise(resolve => setTimeout(() => resolve('Second done'), 500));
  }

  async function asyncFunction3() {
    return new Promise(resolve => setTimeout(() => resolve('Third done'), 1500));
  }

  const asyncFunctions = [asyncFunction1, asyncFunction2, asyncFunction3];

  async function executeAsyncFunctions(functions) {
    const arrRes = []
    for (let i = 0; i < functions.length; i++) {
      const res = await  functions[i]()
      arrRes.push(res)
    }
    return arrRes
  }

// Вызываем функцию и получаем результат
  executeAsyncFunctions(asyncFunctions).then(console.log);
// Ожидаемый результат: ["First done", "Second done", "Third done"]

}

{
  function foo() {
    const objKate = {
      name: 'Kate',
      age: 24,
      f() {
        console.log(this);
        (function innner() {
          console.log(this);
        })();// так же как сеттаймаут
      }
    };

    objKate.f();
  }

  foo();

  objKate.f();
}

'use strict';
function test() {
  console.log(this);  // undefined, потому что функция не вызвана как метод
}
test.bind(Window)();

{
  const obj = {
    name: 'Alice',
    greet: function () {
      // 1. const self = this -  сохранить в переменную
      // 2. привязать через .bind(this)
      // 3. объявить через стрелочную функцию
      setTimeout(function () {
          console.log('Hello, ' + this.name); // Что выведет?
        }
        .bind(this)
        , 1000);
    }
  };

  obj.greet();
}


{
  /**
   * @param {integer} init
   * @return { increment: Function, decrement: Function, reset: Function }
   */
  var createCounter = function (init) {
    let currentValue = init;
    return {
      increment: function () {
        return currentValue += 1;
      },
      decrement: function () {
        return currentValue -= 1;
      },
      reset: function () {
        currentValue = init;
        return currentValue;
      },
    };
  };

  const counter = createCounter(5);

  console.log(counter.increment());
  console.log(counter.reset());
  console.log(counter.decrement());

  /**
   * const counter = createCounter(5)
   * counter.increment(); // 6
   * counter.reset(); // 5
   * counter.decrement(); // 4
   */
}

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
