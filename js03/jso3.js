/*
//| Работа с переменными
Window.a = 120;

a=150;
console.log(' a: ', a);
var a;

function f() {
  const b = 120;
  if (true) {
    let a;
    a = 175;
    const c = 200;
    const d = 300;
    const e = 400;
  }
}

f();
try{
  
  console.log('Window.a ', Window.a);
  console.log('a ', a);
  console.log(b);
  console.log(c);
  console.log(d);
} catch (e){
  console.log('e ', e);
} finally{
  console.log('this is how different variables show in their view fields');
}
*/

//\ Если мыр работаем с коллстеком
//\ то..
//! важно! код считываетсяч компилятором по строчно!
//! сверху вниз! это не значит что весь синхронный код
//! выхватывается кусками!
//?
//\ 0 выполняется синхронный код
//! 1 выполняется очередь микрозадач
//| 2 выполняется очеред рендеров
//? 3 выполняется очередь макрозадач

/*
setTimeout(()=>{
  console.log(1);
}, 3000)

setTimeout(()=>{
  console.log(2);
}, 1000)

setTimeout(()=>{
  console.log(3);
}, 3)

new Promise((resolve)=>{
  console.log(4);
  resolve();
  console.log(5);
}).then(()=>{
  console.log(6);
})

console.log(7);*/


/*
//! this is what order queues are working in
setTimeout(function () {
  console.log("s1");
}, 1);

setTimeout(function () {
  console.log("s2");
}, 1000);

new Promise(function (resolve) {
  console.log("p1");
  resolve();
  console.log("p2");
}).then(function () {
  console.log("p3");
});

console.log("w1");

async function test1() {
  console.log("a1");
  // await test2();
  // console.log("a2");
  // console.log("lala");
  test2().then(()=>{
    console.log("a2");
    console.log("lala");
  })
}

async function test2() {
  console.log("a3");
}

test1();

console.log("w2");

//? Call Stack — синхронный код выполняется напрямую.
//?
//! Microtask Queue — .then(), async/await после await, queueMicrotask.
//?
//| Render Queue — браузер планирует отрисовку следующего кадра (обычно 60 FPS).
//| Здесь может сработать requestAnimationFrame.
//?
//\ Macrotask Queue — setTimeout, setInterval, I/O, события.*/

//? здесь сетаймаут в первом зене на 126 строке попадает
//? в макротаски и мы ждем пока промис зарезолвится
//? и вернется новый объект промиса и только тогда!!!
//? выполнится строка 127

/*

console.log(1);

setTimeout(() => console.log(2), 1000);

Promise.resolve().then(() => console.log(3));

Promise.resolve()
  .then(() => setTimeout(() => { console.log(4); },2500))
  .then(() => console.log(5));

Promise.resolve().then(() => console.log(6));

Promise.resolve().then(() => console.log(7));

setTimeout(() => console.log(8), 2000);

console.log(9);
//? вывод: 1 9 3 6 7 5 4 2 8*/

/*

console.log(1);

setTimeout(() => {
  console.log(2);
  Promise.resolve()
    .then(() => {
      console.log(3);
    });
}, 200);

new Promise((resolve) => {
  console.log(4);
  resolve(5);
}).then((data) => {
  console.log(data);
  
  Promise.resolve()
    .then(() => {
      console.log(6);
    })
    .then(() => {
      console.log(7);
      
      setTimeout(() => {
        console.log(8);
      }, 100);
    });
});

setTimeout(() => {
  console.log(9);
}, 200);

console.log(10); // 1 4 10 5 6 7 2 3

*/


