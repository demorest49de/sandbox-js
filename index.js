// foo(); // это хойстинг - то есть всплытие функции
//
// function foo() {
//   console.log(' hoisting: ');
// }
//
// console.log(' a: ', a);
//
// let bar = function () {
// };
// bar();
// var a = 'str';
// let b = 1;

// замыкание это способность функции запоминать свое внешнее лексическое окружение

// const colors = ['red', 'blue', 'yellow'];
// const [red, blue, yellow, novalue = 'no value'] = colors;
// console.log(' colors: ', red, blue, yellow,  novalue);
// console.log(' colors: ', [red, blue, ...colors]);

//slice
// let arr = ['a','b','c','d','e'];
// const sub = arr.slice(0,2); // ne vkluchitelno po 2-oy index
// console.log(' arr: ', arr);
// console.log(' sub: ', sub);

// let arr = ['a','b','c','d','e'];
// const sub = arr.slice(1); // nachinaya s indexa virezaem
// console.log(' arr: ', arr);
// console.log(' sub: ', sub);

// let arr = ['a', 'b', 'c', 'd', 'e'];
// const sub = arr.slice(1, -2); // vtoroy index ne vkluchitel'no
// // te bez 2 parametra budut vse, a nachinaya s -1 budut bez kolichestva
// // elementov s minusom
// console.log(' arr: ', arr);
// console.log(' sub: ', sub);

// splice
// udalenie elementov
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log('source arr: ', arr);
arr.splice(1, 3);// 1 param - s kakogo elem-ta, 2 param - skolko elems udalyaem
console.log('result arr: ', arr);
