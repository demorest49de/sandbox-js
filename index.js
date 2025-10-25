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
// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log('source arr: ', arr);
// arr.splice(1, 3);// 1 param - s kakogo elem-ta, 2 param - skolko elems udalyaem
// console.log('result arr: ', arr);

// NE udalenie elementov, a dobavlenie elementov
// const arr = ['a', 'b', 'c', 'd', 'e'];
// console.log('source arr: ', arr);
// // arr.splice(1, 0, "2", "3", "test");
// const addData = ['4', '5', '6'];
// arr.splice(1, 0, ...addData);
// // 1 param - s kakogo elem-ta, 2 param - 0 tk ne udalyaem nichego
// // 3 param - dobavlayem elems. mozhno spreadom raskatat' zdes'.
// console.log('result arr: ', arr);


// tipi dannih
// primitivnie
// todo string number symbol undefined null bigInt
// hranjatsja v steke. stek imeet fix razmer i raven 1 mbyte.

// ssilochnie
// todo object array function
// kucha ne imeet ogranichenija po razmeru i mozhet uvelichivatsja
// pri neobhodimosti.

// способы создания объекта
// const user = {}; // литерал объекта
//
// let person = new Object();
// person.age = 25;
// person.name = 'egor';
//
// console.log(' person: ', person);

const user = {
  name: 'artem',
  age: 6,
  isStudent: false,
}; // в переменную юзер будет сохранена ссылка на ячейку в памяти
console.log(' user: ', user);

// const user2= user; // второй объект не создался
const user2 = {...user}; // второй объект не создался
user2.name = 'bob';
console.log(' user: ', user);
console.log(' user2: ', user2);
console.log(' is equal ==: ', user == user2);
console.log(' is equal ===: ', user == user2);

/*

undefined == null	особое правило — равны только друг другу	✅ true
undefined == 0	нет приведения	❌ false
null == 0	тоже нет приведения	❌ false
true == 1	true → 1 → 1 == 1	✅ true
false == 0	false → 0	✅ true
'5' == 5	'5' → 5	✅ true
'0' == false	false → 0, '0' → 0 → 0 == 0	✅ true
0 == ''	'' → 0	✅ true
[] == ''	[] → '' → '' == ''	✅ true
[] == 0	[] → '', '' → 0 → 0 == 0	✅ true
[1] == 1	[1] → '1', '1' → 1	✅ true
[1,2] == '1,2'	массив → '1,2'	✅ true
[1,2] == 1	[1,2] → '1,2', '1,2' → NaN → NaN == 1	❌ false
[] == ![]	![] → false, [] → '', '' → 0, false → 0 → 0 == 0	✅ true
{} == '[object Object]'	объект → '[object Object]'	✅ true
{} == {}	разные ссылки на объект	❌ false
NaN == NaN	NaN не равен ничему	❌ false

 */
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}                                   //   4     1           1

const users = [
  {
    name: `vasja${randomInt(1, 9)}`,
    age: randomInt(22, 29),
    isStudent: Boolean(randomInt(0, 1)),
  },
  {
    name: `vasja${randomInt(1, 9)}`,
    age: randomInt(22, 29),
    isStudent: Boolean(randomInt(0, 1)),
  },
  {
    name: `vasja${randomInt(1, 9)}`,
    age: randomInt(22, 29),
    isStudent: Boolean(randomInt(0, 1)),
  },
  {
    name: `vasja${randomInt(1, 9)}`,
    age: randomInt(22, 29),
    isStudent: Boolean(randomInt(0, 1)),
  },
];

const value = users.pop();// удаление последнего элемента
console.log(' value: ', value);
console.log(' users: ', users);