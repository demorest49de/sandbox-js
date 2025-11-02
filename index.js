
//! структуры которые создают в джс область видимости
//? function/class, if/else, loop, try/catch/finally/, switch, anonymous

//\ lex env - объект к которому нет доступа он спрятан под капотом

let globalScope = {
  outerScope: null,
  f: 'Function', // ссылка на функцию f где ключом является имя функции
  a: 10,
};

const a = 10;

function f() {
  let fScope = {
    outerScope: globalScope,
  };
  console.log(a);
}

f();