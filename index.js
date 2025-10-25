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

// 1. переменные со статусами
const STATUS_BUSY = "busy";
const STATUS_READY = "ready";

// 2. объект с вычисляемыми ключами

const STATUS_LABELS = {
  [STATUS_BUSY]: "занято",
  [STATUS_READY]: "свободно",
};

// 3. с БД приходит массив с объектами
const drivers = [
  {name: "павел", status: "ready"},
  {name: "виктор", status: "busy"},
];

//4. приведение статусов в другой вид
const driversStatuses = drivers.map(({name, status}) => {
  console.log(' `status`: ', status);
  return {name, status: STATUS_LABELS[status]};
});

console.log(' driversStatuses: ', driversStatuses);


// tipi dannih
// primitivnie
// todo
//  string number symbol undefined null bigInt boolean
// hranjatsja v steke. stek imeet fix razmer i raven 1 mbyte.

// ssilochnie
// todo
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



