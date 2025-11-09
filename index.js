//! структуры которые создают в джс область видимости
//? function/class, if/else, loop, try/catch/finally/, switch, anonymous

//\ lex env - объект к которому нет доступа он спрятан под капотом

//! при запуске кода компилятор создает глобалСкоуп
//! в него записывает на 1 пробеге ключи
//! в него записывает на 2 пробеге значения

/*
let globalScope = {
  outerScope: null,
  f: 'Function', //? ссылка на функцию f где ключом является имя функции
  someFunc: 'Function',
  a: 234,
};


function f(arg) {
  
  let fScope = {
    outerScope: globalScope,
    arg: 230, //\ undefined => 200 => 210  => 230  => 260
    inner: 'Function',
  };
  function inner(arg2) {
    // let innerScope = {
    //   outerScope: fScope,
    //   arg2: 10, //? undefined => 10
    // };
    
    // let innerScope2 = {
    //   outerScope: fScope,
    //   arg2: 20, //?undefined => 20
    // };
    
    let innerScope3 = {
      outerScope: fScope,
      arg2: 30, //?undefined => 30
    };
    
    arg += arg2;
    //! arg = 200
    //! arg = 210 при innerScope
    //! arg = 230 при innerScope2
    //! arg = 260 при innerScope3
    console.log(' arg: ', arg);
  }
  
  return inner;
}

const someFunc = f(200);
someFunc(10);
someFunc(20);
someFunc(30);*/

/*
a = 200;
console.log('a: ', a);
var a = 500;
console.log('a: ', a);
фи = 43;
console.log('фи: ', фи);

function someFunc() {
  const callback = (arg) => {
    console.log(a);
    console.log(arg);
    console.log(фи);
    return a * arg;
  };
  let a = 10;
  //\ return callback;
  return callback(a);//\ - функция вызвана но а берется из места
  //\определения коллбека
  //! НО
  //? если объявить функцию внутри данной функции someFunc то она
  //? ЗАМКНЕТСЯ на лексическое окружение someFunc и var a = 500; уже не увидит
}


const call = (arg) => {
  console.log(a);
  console.log(arg);
  return a * arg;
};

console.log(someFunc());*/

/*
//\ Рекурсия - это способность функции
//! вызывать саму себя
//? в процессе работы

function sumTo(num) {
  if (num <= 1) return num;
  
  return num + sumTo(num - 1);
}

console.log(`sum: ${sumTo(3)}`);
//! то есть в стек вызовов будут накапливаться вызовы пока не
//! сработает точка выхода а именно пока a не станет равным 1 и функция
//! вернет 1

// !
// superSum(0);
// superSum(3)(2)(5)(3);
// superSum(3)(2)(5, 3);
// superSum(3)(2, 5, 3);
superSum(3)(2, 5)(3);
// superSum(3)(2, 5)(3, 9);

function superSum(n) {
  if (n <= 0) return 0;
  if (n === 1) return n;
  
  let outputParams = [];
  
  function inner(...args) {
    outputParams = [...outputParams, ...args];
    
    if (outputParams.length === n) {//! условие выхода
      return outputParams.reduce((acc, el) => acc + el);
    } else {
      return inner;
    }
  }
  
  return inner;
}*/

//? https://youtu.be/FYgtzavnGck?list=PL68yfJ7Vdq8mFH4NiyTLZmNw2_jvfL1R3&t=6540
//?