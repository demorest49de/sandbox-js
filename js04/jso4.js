//! РАБОТА С КОНТЕКСТОМ ВЫЗОВА ФУНКЦИИ
//!

/*

let obj = {name: "eugene"};
let obj2 = {name: "nataly"};

// function f() {
//   console.log('this from f()', this);
// }

const f = function () {
  console.log('this from f()', this);
}
f();

//! стрелка не имет своего контекста вызова
//! она берет его из функции в кот она ...
const f2 = () => {
  console.log('this from f2()', this);
};
f2();
//? функция f() типа function declaration
//? вызывается через точку
//? смотри что слева от точки
//? значит в функции будет контект вызова того
//? объекта который находится слева от точки
// window.f();
obj.f = f;
obj2.f = obj.f;
obj2.f();

obj.f2 = f2;
obj.f2();*/

/*
//! магия вызова именнованой функции тест()
//! или же ф()
let count= 0;
let f = function test() {
  if(count === 2) return;
  count++;
  console.log('count ', count);
  test();
  return f();
}

let v = f;
f = null;

v();
// f();*/
//! какие структуры данных создают области
//! видимости
//! функции классы трай кетч файналли анонимный код цикл
//! if else switch case
//! ЛИТЕРАЛ ОБЪЕКТА!!! ОБЛАСТЬ ВИДИМОСТИ НЕ СОЗДАЕТ!!!

/*

let obj = {
  name: 'eugen',
  f: function test(){
    console.log('this from f', this);
    (function inner() {
      console.log('this from inner', this);
    })();
  }
};
let obj2 = { name: 'nastja'};

obj2.f = obj.f;
obj2.f();
*/

/*

let obj = {
  name: 'eugene',
  f: function func(){
    console.log('this from f', this);
    return function inner() {
      console.log('this from inner', this);
    };
  }
};

let obj2 = { name: 'nastja'};

obj2.f = obj.f();
obj2.f();
*/

/*

let obj = {
  name: 'eugene',
  f: function func(){
    console.log('this from f', this);
    return function inner() {
      console.log('this from inner', this);
    };
  }
};

let obj2 = { name: 'nastja'};

const f = obj.f();
f();//! вызов f() ИДЕТ ОТ ВИНДОУ КОНСТ ЗДЕСЬ НЕ ПРИЧЕМ!!!;

*/

/*

let obj = {
  name: 'eugene',
  f: function func() {
    console.log('this from f', this);
    return function inner() {
      console.log('this from inner', this);
    };
  }
};

let obj2 = {name: 'nastja'};
let obj3 = {
  name: 'yo', innerObj: {
    name: 'bla'
  }
};

obj3.innerObj.f = obj.f();
obj3.innerObj.f();
*/

//' чем отличается эрроу фанкшн от
//' фанкшн декларейшн - у эрр фанк:
//' - важный момент когда рассчитывается зис!
//' фанк декл - зис те кон-ст вызыова считается каждый
//' раз когда происходит вызтв
//' эрр фанк - считается один раз в момент определения.
//' своего зиса нет. стрелка его берет у той функции
//' из которой эрроу фанк была вызвана
//' - нет объекта прототипа
//' - нет аргументс
//' - у эрр фанк нет методов функций: колл эпплай и байнд

/*
const obj = {
  name: 'eugene',
  a() {
    setTimeout(function () {
      console.log('fd in ', this);
    }, 500);
    setTimeout(() => { //? стрелка всегда смотрит
      //? в контексте какой функции она (стрелка)
      //? вызвана
      console.log('af in ', this);
    }, 500);
  }
};

obj.a();
*/

//| fd - неважно как его определили важно как его вызвали
//| af - неважно как его вызвали важно как его определили


//| функции конструкторы пишется с Большой буквы
//| пародия на класс в строготипизир языке
//|

/*
//! функция конструктор отличия от простой функции
function ConstructorFunc(name, age) {
  this.name = name;
  this.age = age;
}

ConstructorFunc.prototype.SayHi = function () {
};

function JustFunc(name, age) {
  return {
    name, age, SayHi() {
    }
  };
}

JustFunc.prototype.SayHi = function () {
  
}

const obj1 = new ConstructorFunc('yo1', 'ivan');
const obj2 = JustFunc('yo2', 'eugene');

console.log(' obj1', obj1);
console.log(' obj2', obj2);
*/

//| методы функций!

/*

let obj1 = {
  name: 'eugene',
  sayHi(a, b, c, d) {
    console.log('my name is', this.name, ...arguments);
  }
};

let obj2 = {
  name: 'julia',
};

let obj3 = {
  name: 'yo',
};

//! bind
// obj2.sayHo = obj1.sayHi.bind(obj1, 10, 20, 50);
// obj2.sayHo = obj1.sayHi.bind(obj1, 10).bind(obj2, 20).bind(obj3, 30);
// console.dir(obj2.sayHo);
// obj2.sayHo(180);
// console.log(obj2.name);

//! call & apply
obj1.sayHi.call(obj1, 10, 20, 50);
obj1.sayHi.apply(obj1, [10, 20, 50]);
*/


//! функции конструкторы

//! у AF нет this => нельзя вызвать как функц конструктор!

const TestAF = (name, age)=> {
  this.name = name;
  this.age = age;
}
//! TestAF is not a constructor
//' let obj3 = new TestAF('egegey', 24);

function Test(name, age) {
  this.name = name;
  this.age = age;
}
Test.prototype.sayHi = function (a,b){
  console.log(' a,b: ', a, b);
}
Test.prototype.human = true;

let obj = new Test('yo', 22);
obj.sayHi(2,3);
console.log(obj);
console.dir(obj.sayHi);

