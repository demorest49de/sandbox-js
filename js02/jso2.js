/*
function countdown(n, done) {
  console.log(n);
  if (n > 1) {
    setTimeout(() => countdown(n - 1, done), 1000);
  } else {
    if (typeof done === 'function') setTimeout(done, 1000);
  }
}

// запуск
countdown(6, () => console.log('Готово'));*/

/*
//? 🟩 1. setTimeout (рекурсия) — классика
function count(n) {
  console.log(n);
  if (n > 1) setTimeout(() => count(n - 1), 1000);
}
count(6);*/

/*
//? 🟩 2. setInterval — повторяющийся таймер
let n = 6;
const id = setInterval(() => {
  console.log(n--);
  if (n === 0) clearInterval(id);
}, 1000);*/

/*
//? 🟩 3. async/await + sleep

//\ Красиво, читаемо.

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function countAsync() {
  for (let i = 6; i >= 1; i--) {
    console.log(i);
    await sleep(1000);
  }
}
void countAsync();*/

/*
//? 🟩 4. Цепочка Promises (без async/await)
const wait = n => new Promise(r => {
  console.log(n);
  setTimeout(r, 1000);
});

let p = Promise.resolve();
for (let i = 6; i >= 1; i--) {
  p = p.then(() => wait(i));
}*/

/*
//? 🟩 5. Генератор (function) + setTimeout*

//\ Интересный функциональный стиль:

function* gen() {
  for (let i = 6; i >= 1; i--) yield i;
}

const it = gen();

function run() {
  const {value, done} = it.next();
  if (!done) {
    console.log(value);
    setTimeout(run, 1000);
  }
}
run();*/

/*
//? 🟩 6. requestAnimationFrame (хитрый способ)

//\ Не предназначен для секунд, но работает, если считать время:

let start = null;
let n2 = 6;

function tick(t) {
  if (!start) start = t;

  if (t - start >= 1000) {
    console.log(n2--);
    start = t;
  }
  if (n > 0) requestAnimationFrame(tick);
}

requestAnimationFrame(tick);*/

/*
//? 🟩 7. Web Worker (параллельный поток)

//\ main.js

const worker = new Worker('worker.js');
worker.onmessage = e => console.log(e.data);


//\ worker.js

let n3 = 6;
const id2 = setInterval(() => {
  postMessage(n3--);
  if (n3 === 0) clearInterval(id2);
}, 1000);*/

/*
//? 🟩 8. setTimeout в цикле с накоплением времени

//\ Не рекурсивный, но рабочий:

for (let i = 0; i < 6; i++) {
  setTimeout(() => console.log(6 - i), i * 1000);
}*/

/*
//? 🟩 9. Через reduce (функциональная магия)
[6,5,4,3,2,1].reduce(
  (p, n, i) => p.then(() => new Promise(r => {
    setTimeout(() => { console.log(n); r(); }, 1000);
  })),
  Promise.resolve()
);*/

/*
//? 🟩 10. Через рекурсивный setTimeout, но с внешним state
let num = 6;

function tick() {
  console.log(num--);
  if (num > 0) setTimeout(tick, 1000);
}

tick();*/

/*
//? 🟩 11. Через async генератор (очень современно)
async function* gen() {
  for (let i = 6; i >= 1; i--) {
    yield new Promise(res => setTimeout(() => res(i), 1000));
  }
}

(async () => {
  for await (let n of gen()) {
    console.log(n);
  }
})();*/

//? 🟩 12. Через Atomics.wait (блокирующий, Node.js)

const alex = {
  askFile() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Users");
        reject("Errors");
      }, 2000);
    });
  },
  /*askFile2: () => {
    
  }*/
};

//! про реджект ВАЖНОЕ! если промис реджектится
//! то комп-р ищет первый кэтч после обработки кэтча
//! работает как обычный промис
/*
alex.askFile()
  .catch((error) => {
    console.log(' error: ', error);
    console.warn(name2);
  })
  .then((then1) => {
    console.log(' then1: ', then1);
    return then1;
  })
  .then((then2) => {
    console.log(' then2: ', then2);
  })
  .catch((error) => {
    console.warn(error);
    console.error(error);
  });*/

/*
alex.askFile()
  .then((data) => {
      console.log('then resolve');
      console.log(data);
      return data;
    },
    //! здесь обрабатывается reject
    //! и после этого коллбека ошибка
    //!считается обработанной
    //\ и начнет выполяться дальше then
    (error) => {
      console.log('then reject');
      console.log(error);
      return error;
    })
  .then((data) => {
    console.log('then resolve');
    console.log(data);
  })
  .catch((error) => {
    console.log('catch');
    console.log(error);
    return error;
  })
  .finally(() => {
    console.log(' finally: ');
    // return '222 finally';
    // ? finally ничего не может вернуть!!!
    /!*return new Promise((resolve)=>{
      resolve('promise from finally returned');
    });//\ и возврат промиса тоже не поможет))))*!/
    console.log(errorName);
  })
  .catch(()=>{
    console.log('catch after finally');
    return 'finally error catched and handled';
  })
  .then((data) => {
    console.log('then after finally');
    console.log(data);
  })
;*/

/*alex.askFile()
  .then((data) => {
      console.log(' data: ', data);
      return new Promise((resolve) => {
        resolve(1);
      });
    },
    (error) => {
      console.log(' error from 1 then in 2 param: ', error);
      return error + " 2";
    })
  .then((data) => {
    console.log(data, 'then2 resolve');
  })
  .catch((error) => {
    console.log('catch');
    console.log(error);
    return error;
  })
;*/

/*

alex.askFile()
  .then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve('  hello 1');
        }, 1000);
      }
    );
  })
  .then((resolve) => {
    console.log(resolve);
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve('hello 2');
        }, 1000);
      }
    );
  })
  .then((res)=>{
    console.log(res);
  })
;*/


const promise = alex.askFile();

promise.then((res) => {
  console.log(res);
})
.then((res) => {
  console.log(res);
});

promise.then((res) => {
  console.log(res);
});