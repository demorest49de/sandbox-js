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

let globalScope = {
  f1: 'Function',
  a: 25,
};
var a = 25;

function f1(arg1, f2) {
  let f1Scope = {
    innerScope: globalScope,
    f2: 'Function',
    a: 250,
  };
  
  let a = 250;
  
  return f2(a);
}

function f2(arg2) {
  console.log(' a: ', a);
  console.log(' a: ', arg2);
  return function (arg3) {
    return a + arg2 + arg3;
  };
};

//\ Замыкание для
//? function declaration
//! создается
//? в момент определения функции
console.log(' f1(20)(40): ', f1(20, f2)(40));