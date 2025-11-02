//! структуры которые создают в джс область видимости
//? function/class, if/else, loop, try/catch/finally/, switch, anonymous

//\ lex env - объект к которому нет доступа он спрятан под капотом

//! при запуске кода компилятор создает глобалСкоуп
//! в него записывает на 1 пробеге ключи
//! в него записывает на 2 пробеге значения
let globalScope = {
  outerScope: null,
  f: 'Function', //? ссылка на функцию f где ключом является имя функции
};


function f(arg) {
  
  let fScope = {
    outerScope: globalScope,
    inner: 'Function',
  };
  function inner(arg2) {
    let innerScope = {
      outerScope: fScope
    };
    arg += arg2;
    console.log(' arg: ', arg);
  }
  
  return inner;
}

const someFunct = f(200);
someFunct(10);
someFunct(20);
someFunct(30);