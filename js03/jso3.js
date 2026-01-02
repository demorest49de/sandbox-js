
Window.a = 120;
  var a= 150;
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
console.log(Window.a);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
