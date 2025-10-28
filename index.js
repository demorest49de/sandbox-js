// структуры которые создают в джс область видимости
// function/class, if/else, loop, try/catch/finally/, switch, anonymous

// lex env - объект к которому нет доступа он спрятан под капотом

const a = 10;

function f(){
  console.log(a);
}

f();