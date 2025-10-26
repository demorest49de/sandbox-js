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
// arr.splice(1, 3, ...addData);
// // 1 param - s kakogo elem-ta, 2 param - 0 tk ne udalyaem nichego
// // 3 param - dobavlayem elems. mozhno spreadom raskatat' zdes'.
// console.log('result arr: ', arr);

// const arr = ['a', 'b', 'c', 'd', 'e'];
// console.log('source arr: ', arr);
// arr.splice(-3, 2);
// // 1 param - s kakogo elem-ta, 2 param - skolko udalyaem
// // если у 1 параметра мы ставим минус, значит начинаем осчитывать
// // с конца массива сколько-то элементов
// console.log('result arr: ', arr);
// со сплайсом мы можем как добавлять объекты так и удалять

// toSpliced() - тоже самое что и splice() но иммутабельный
// поддерживается с определенной версии js

// reduce

// reduce((acc, el) => {}, 0 - опциональное значение
// по умолчанию, может быть любого типа);

// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 22 },
// ]; // {totalNames: [...], totalAge: ...}
//
// const res = people.reduce(
//   (acc, person) => {
//     // console.log('person', person);
//     acc.totalNames.push(person.name);
//     acc.totalAge += person.age;
//     // console.log('acc: ', acc);
//     return acc;
//   },
//   { totalNames: [], totalAge: 0 }
// );
//
// console.log(res);

// статические свойства объекта -
// они задаются при создании

// const fruit = {
//   color: 'red',
//   taste: "delicious"
// };

// динамические свойства объекта -
// они вычисляются в процессе выполнения кода

// const objDynamic = {
//   [key]: value
// };

// function createObject(key, value) {
//   return {[key]: value};
// }
//
// const obj = createObject('car', 'AUDI');
// console.log(' obj: ', obj);

// кейс из практики

// // 1. переменные со статусами
// const STATUS_BUSY = "busy";
// const STATUS_READY = "ready";
//
// // 2. объект с вычисляемыми ключами
//
// const STATUS_LABELS = {
//   [STATUS_BUSY]: "занято",
//   [STATUS_READY]: "свободно",
// };
//
// // 3. с БД приходит массив с объектами
// const drivers = [
//   {name: "павел", status: "ready"},
//   {name: "виктор", status: "busy"},
// ];
//
// //4. приведение статусов в другой вид
// const driversStatuses = drivers.map(({name, status}) => {
//   console.log(' `status`: ', status);
//   return {name, status: STATUS_LABELS[status]};
// });
//
// console.log(' driversStatuses: ', driversStatuses);

// spread -> распаковывает
// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const merged = [...arr1, ...arr2];
//
// console.log(merged); // [1, 2, 3, 4]


// rest -> собирает
// Когда ты не знаешь заранее, сколько аргументов придёт в функцию —
// используешь rest-параметр (...args).

// const str = 'hello world';
// console.log(str);
// console.log(`str.split('').reverse().join(): `, str.split(' ').reverse().join(' '));

// Раскладываем строку в символы:
// const [first, ...rest] = str;
// console.log(' first: ', first, rest);
// const result = first.toUpperCase() + rest.join('');
// console.log(' result: ', result);

//Map коллекция

// new Map - это коллекция ключ значения как и Object.
// значения по ключу уникальные 2 одинаковых ключа быть не может
// const mapCollection = new Map;
// mapCollection.set(2, "2");
// mapCollection.set("3", "1");
// mapCollection.set(true, 1);
// mapCollection.set(true, 1);
//
// console.log(' mapCollection.get(true): ', mapCollection.get(true));
//
// console.log(' mapCollection: ', mapCollection);
// const key = {[1]: 1}
// const subArrs  = [
//   ["1", {[1]: 1}],
//   [key, 222],
//   [true, "1"],
//   [1, false],
// ];
//
// const map = new Map(subArrs);
// console.log(' map: ', map.get(key));

// weakmap
// объект в коллекции в качестве ключа существует до тех пор
// пока сущесвтует ссылка на объект
// const weakMap = new WeakMap();
// let obj = {name: 'Alice'};
// weakMap.set(obj, 'hello');
// obj = null; // если объект обнуллить то запись в коллекции тоже перестанет
// // сущестововать
// console.log(' weakMap: ', weakMap);

// в обычном мапе все лучше даже при удалении ссылки запись остается в памяти
// const strongMap = new Map();
// let obj2 = {name: 'Alice'};
// strongMap.set(obj2, 'hello');
// obj2 = null;
// console.log(' strongMap: ', [...strongMap]);


// new Set()
// особый вид коллекции (множесто значений без ключей)
// значения уникальные 2 одинаковых значения быть не может
// const set = new Set();
// set.add('value2');
// set.add(`value2`);
// console.log(' set: ', set);



// отличие forof От forin
// const arr = [10, 20, 30];
//
// console.log('--- for…in (ключи/индексы) ---');
// for (const i in arr) {
//   console.log(i, '->', arr[i]);
// }
//
// console.log('--- for…of (значения) ---');
// for (const value of arr) {
//   console.log(value);
// }

/*

1️⃣ Массивы

Итерируемый объект → можно использовать:

Метод	    Перебирает	Примечание
for…of	    значения	Обычно удобнее всего
❌for…in	ключи       (индексы)	Иногда опасно, т.к. перебирает свойства прототипа❌
forEach	    значения	Не работает с break/continue
обычный for	индексы	    Полный контроль

Пример:

const arr = [10, 20, 30];

for (const value of arr) console.log(value); // 10,20,30
for (const i in arr) console.log(i);        // 0,1,2

2️⃣ Строки

Итерируемый объект, можно использовать:

for…of → перебирает символы

forEach через Array.from(str) → создаёт массив символов

Пример:

const str = 'abc';
for (const char of str) console.log(char); // 'a', 'b', 'c'


❗ for…in тоже работает, но возвращает индексы '0','1','2' — редко нужно.

3️⃣ Объекты

Не итерируемые напрямую → нельзя использовать for…of.

for…in → перебирает ключи свойства

Object.keys(obj).forEach(...) → ключи

Object.values(obj).forEach(...) → значения

Object.entries(obj).forEach(([k,v]) => ...) → пары ключ/значение

Пример:

const user = {name:'Alice', age:25};

for (const key in user) console.log(key, user[key]); // ключи
Object.values(user).forEach(v => console.log(v)); // значения


❗ Нюанс: for…in перебирает свойства прототипа, поэтому часто используют hasOwnProperty.

4️⃣ Map и Set

Итерируемые объекты, можно использовать:

for…of → значения или [key, value] для Map

forEach → колбэк с аргументами (value, key, map)

Пример Map:

const map = new Map([['a',1],['b',2]]);
for (const [k,v] of map) console.log(k,v); // a 1, b 2


Пример Set:

const set = new Set([1,2,3]);
for (const v of set) console.log(v); // 1 2 3

5️⃣ WeakMap и WeakSet

Не итерируемы!

Нельзя использовать for…of, forEach и т.д.

Доступ только через методы .get()/.set() (WeakMap) и .add()/has() (WeakSet)

❗ Сделано специально: ключи могут быть удалены сборщиком мусора, поэтому перебор невозможен.

6️⃣ Arguments и NodeList

arguments → итерируемый с for…of (ES6+), но не массив

NodeList (например document.querySelectorAll) → тоже итерируемый, можно for…of

function test(...args) {
  for (const a of args) console.log(a);
}
test(1,2,3);

🔑 Основные нюансы

for…of → работает только с итерируемыми объектами (массивы, строки, Map, Set, NodeList, arguments)

for…in → работает с любым объектом, перебирает ключи, включая прототип

Примитивы (string, number, boolean) → строки можно перебирать, числа/булевы нет

WeakMap/WeakSet → не итерируемы, можно только получать/устанавливать конкретные ключи

 */

// const primitiveTypes = {
//   [`NaN`]: typeof(NaN),
//   [`'string'`]: typeof(''),
//   [`1`]: typeof(1),
//   [`123n`]: typeof(123n),
//   [`true`]: typeof(true),
//   [`undefined`]: typeof(undefined),
//   [`Symbol('id')`]: typeof(Symbol('id')),
//   [`null`]: typeof(null),
// };
// console.log(primitiveTypes);

// const referenceTypes = {
//   [`[]`]: typeof([]),
//   [`{}`]: typeof({}),
//   [`()=>{}`]: typeof(()=>{}),
//   [`12.03.2025`]: typeof(new Date()),
//   [`/\\d+/`]: typeof(/\d+/),
//   [`new Map(), new WeakMap()`]: typeof(new Map()),
//   [`new Set(), new WeakSet()`]: typeof(new Set()),
//   [`new Error('ooops')`]: typeof(new Error('ooops')),
//   [`new Promise((resolve)=>{resolve(true)})`]: typeof(new Promise((resolve)=>{resolve(true)})),
//   [`new Uint8Array(5)`]: typeof(new Uint8Array(5)),
// };
// console.log(referenceTypes);

// tipi dannih
// primitivnie

//  string number symbol undefined null bigInt boolean
// hranjatsja v steke. stek imeet fix razmer i raven 1 mbyte.

// ssilochnie
//  object array function
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

// const user = {
//   name: 'artem',
//   age: 6,
//   isStudent: false,
// }; // в переменную юзер будет сохранена ссылка на ячейку в памяти
// console.log(' user: ', user);
//
// // const user2= user; // второй объект не создался
// const user2 = {...user}; // второй объект не создался
// user2.name = 'bob';
// console.log(' user: ', user);
// console.log(' user2: ', user2);
// console.log(' is equal ==: ', user == user2);
// console.log(' is equal ===: ', user == user2);

/*
   shift удаляет первый элемент
   unshift добавляет первый элемент
   push добавляет последний элемент
   pop удаляет последний элемент
 */

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

// const users = [
//   {
//     name: `vasja${randomInt(1, 9)}`,
//     age: randomInt(22, 29),
//     isStudent: Boolean(randomInt(0, 1)),
//   },
//   {
//     name: `vasja${randomInt(1, 9)}`,
//     age: randomInt(22, 29),
//     isStudent: Boolean(randomInt(0, 1)),
//   },
//   {
//     name: `vasja${randomInt(1, 9)}`,
//     age: randomInt(22, 29),
//     isStudent: Boolean(randomInt(0, 1)),
//   },
//   {
//     name: `vasja${randomInt(1, 9)}`,
//     age: randomInt(22, 29),
//     isStudent: Boolean(randomInt(0, 1)),
//   },
// ];
//
// console.log(' users: ', users);

// const superUser = {
//   id: 10,
//   name: "Clementina DuBuque",
//   username: "Moriah.Stanton",
//   email: "Rey.Padberg@karina.biz",
//   address: {
//     street: "Kattie Turnpike",
//     suite: "Suite 198",
//     city: "Lebsackbury",
//     zipcode: "31428-2261",
//     geo: {
//       lat: "-38.2386",
//       lng: "57.2232"
//     }
//   },
//   phone: "024-648-3804",
//   website: "ambrose.net",
//   company: {
//     name: "Hoeger LLC",
//     catchPhrase: "Centralized empowering task-force",
//     bs: "target end-to-end models"
//   }
// };

// const superUserCopied = {
//   ...superUser,
//   address: {
//     ...superUser.address,
//   }
// };

// superUserCopied.address.city = 'London';
// console.log(' superUser: ', superUser.address);
// console.log(' superUserCopied: ', superUserCopied.address);
// const clonedUser = structuredClone(superUser);
// clonedUser.address.street = 'Downing Street';
// console.log(' superUser: ', superUser.address);
// console.log(' clonedUser: ', clonedUser.address);

// function calc(a, b) {
//   return [a + b, undefined, a * b, a / b,];
// }
//
// const [sum,subtr = 'no subtraction', mult, div]=calc(5,2);
// console.log(' sum,subtr, mult, div: ', sum, subtr, mult, div);


// const person = {
//   name: 'Kirill',
//   age: 24,
//   adress: {
//     country: 'Poland',
//     city: 'Warsaw',
//   },
// };
//
// const name = 'Bob';
// const {
//   name: newName,
//   age,
//   car,
//   adress:
//     {
//       city: myCity,
//       country: myCountry
//     }
// } = person;
//
// console.log('name', name);
// console.log('newName', newName);
// console.log('age', age);
// console.log('car key', car);
// console.log('adress', adress);

/*
C(R)UD
C - CREATE - POST { NAME: "NAME", ID: 1 }
R - READ GET
U - UPDATE FILTER UPDATE, PUTCH
D - DELETE
 */

// const users = [
//   {
//     id: 1,
//     name: 'v',
//     isStud: true
//   },
// ]

// const user = {
//   id:2,
//   name: 'T',
//   isStud: true
// }

// create
// // const newJoinedArray = [...users, user];
// const newJoinedArray = [...users].concat(user); // 2 sposob
// console.log(' newJoinedArray: ', newJoinedArray);


// Update
// const users = [{
//   id: 1, name: 'vlad', isStud: true
// }, {
//   id: 2, name: 'dennis', isStud: true
// }, {
//   id: 3, name: 'viktor', isStud: true
// },];
//
// const updUsers = users.map((user) => {
//   if (user.name === 'dennis') {
//     return {...user, isStud: false};
//   } else {
//     return user;
//   }
// });

// console.log(' updUsers: ', updUsers);

// delete
// const usersWithoutDeleted =
//   users.filter(user => user.id !== 3);
// console.log(' deletedUsers: ', usersWithoutDeleted);



