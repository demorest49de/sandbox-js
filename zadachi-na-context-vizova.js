// "use strict"

//this - это спец-е зарезервированное ключевое слово в языке JS, которое используется в функциях, 
// в момент обработки которого JS высчитывает ссылку на некоторый объект
// Фактически, this в конечном итоге вернет ссылку на какой-то объект

//this работает только в функциях

// у this есть 2 поведения при use strict и без (create react app работает в строгом режиме (т.к. используются модули))
// внутренности классов так же работают в строгом режиме JS

// console.log(this) 

//что выведет консоль

// function test(){
// 	console.log(this)
// }
// test()

//=========

// const objNew = {name: 'test', age: 24}
// function test(){
// 	console.log(this)
// }

// test()

// objNew.test = test
// objNew.test()



// т.е., в function declaration важно, от имени какого объекта идет вызов фукнции, грубо говоря, что стоит перед 
// точкой. Вычисление this  у FD происходит в момент вызова фукнции.
// у function expression важно смотреть как она объявлена - по типу FD, или по типу Arrow function

// const objKate = { name: 'Kate', age: 24 }
// const objJhon = { name: 'Jhon', age: 55 }

// function test() {
// 	console.log(this)
// }
// test()

// objKate.test = test
// objJhon.test = objKate.test

// objJhon.test()

//================
//какие два console.log выводятся в консоль
// function foo(){
// 	const objKate = {
// 	name: 'Kate',
// 	age: 24,
// 	f() {
// 		console.log(this);
// 		(function innner() {
// 			console.log(this);
// 		})()
// 	}
// }

// objKate.f()
// }
// foo()

// objKate.f()


// const objKate = {
// 	name: 'Kate',
// 	age: 24,
// 	f() {
// 		console.log(this);
// 		return function innner() {
// 			console.log(this);
// 		}
// 	}
// }
// const objJhon = { name: 'Jhon', age: 55 }
// objJhon.f =  objKate.f()
// objJhon.f()

//================

// const objKate = {
// 	name: 'Kate',
// 	age: 24,
// 	f() {
// 		console.log(this);
// 		return function innner() {
// 			console.log(this);
// 		}
// 	}
// }
// const objJhon = { name: 'Jhon', age: 55 }
// const outer = objKate.f();
// console.log(outer());

//================

// const objKate = {
// 	name: 'Kate',
// 	age: 24,
// 	f() {
// 		console.log(this);
// 		return function innner() {
// 			console.log(this);
// 		}
// 	}
// }
// const objJhon = { name: 'Jhon', age: 55 }
// const objMax = {
// 	name: 'Max',
// 	innerObg: {
// 		name: 'InnerObj'
// 	}
// };
// objMax.innerObg.f  =  objKate.f();
// objMax.innerObg.f();

//================

// const objKate = {
// 	name: 'Kate', 
// 	age: 24,
// }
// const objJhon = { 
// 	name: 'Jhon', 
// 	age: 55 
// }
// const arrow = () => {
// 	console.log(this);
// }
// arrow();

//================
//важно, у стрелочной фукнции this определяется один раз в момент определения функции

// const objKate = {
// 	name: 'Kate', 
// 	age: 24,
// }
// const objJhon = { 
// 	name: 'Jhon', 
// 	age: 55 
// }

// const arrow = () => {
// 	console.log(this);
// }
// arrow();

// objKate.arrow  =  arrow
// objKate.arrow()

//================

// const objKate = {
// 	name: 'Kate', 
// 	age: 24,
// }
// const objJhon = { 
// 	name: 'John', 
// 	age: 55,
// 	arrow: () => {
// 		console.log(this);
// 	}
// }
// objJhon.arrow()

//================

// const objKate = {
// 	name: 'Kate', 
// 	age: 24,
// }
// const objJhon = { 
// 	name: 'Jhon', 
// 	age: 55,
// 	arrow(){
// 		return () => {
// 			console.log(this);
// 		}
// 	}
// }
// objKate.arrow = objJhon.arrow()
// objKate.arrow()

//================

// const objKate = {
// 	name: 'Kate', 
// 	age: 24,
// }
// const objJhon = { 
// 	name: 'Jhon', 
// 	age: 55,
// 	arrow: () => {
// 		return () => {
// 			console.log(this);
// 		}
// 	}
// }
// objKate.arrow = objJhon.arrow()
// objKate.arrow()

//================
// const objKate = {
// 	name: 'Kate', 
// 	age: 24,
// }
// const objJhon = { 
// 	name: 'Jhon', 
// 	age: 55,
// 	arrow: () => {
// 		return function() {
// 			console.log(this);
// 		}
// 	}
// }
// objKate.arrow = objJhon.arrow()
// objKate.arrow()

//================

// const objKate = {
// 	name: 'Kate', 
// 	age: 24,
// }
// const objJhon = { 
// 	name: 'Jhon', 
// 	age: 55
// }
// const objMax = {
// 	name: 'Max',
// 	innerObg: {
// 		name: 'InnerObj',
// 		a: ()  =>  {
// 			console.log(this);
// 		}
// 	}
// };

// objKate.a =  objMax.innerObg.a;
// objKate.a();

//================

// const objKate = {
// 	name: 'Kate', 
// 	age: 24,
// }
// const objJhon = { 
// 	name: 'Jhon', 
// 	age: 55
// }
// const objMax = {
// 	name: 'Max',
// 	innerObg: {
// 		name: 'InnerObj',
// 		a(){
// 			console.log(this);
// 		}
// 	}
// };

// objKate.a =  objMax.innerObg.a;
// objKate.a();

//=================

// const obj = {
// 	name: 'Kate',
// 	age: 24,
// 	a() {
// 		setTimeout(function () {
// 			console.log('this FD', this);
// 		}, 500)
// 		setTimeout(() => {
// 			console.log('this AF', this);
// 		}, 500)
// 	}
// }
// obj.a();

//================

//функции конструкторы

// function Person(name, age) {
// 	this.name = name;
// 	this.age = age;
// 	return this;
// }
// function Student(name, age)  {
// 	return {name, age};
// }
// console.log(Person('Kate', 24));
// console.log(Student('Steve',  35));

//================

// console.log(new Person('Kate', 24));

//при использовании функций с ключевым словом new меняется поведение функции - она всегда возвращает объект.
// примитивные данные игнорируются

// function Person(name, age) {
// 	this.name = name;
// 	this.age = age;
// 	return 0
// }
// console.log(new Person('Kate', 24));

// //================

// // важно, что возвращать из функции конструктора - если это объект, то

// // function Person(name, age) {
// // 	this.name = name;
// // 	this.age = age;
// // 	return [10]
// // }
// // console.log(new Person('Kate', 24));