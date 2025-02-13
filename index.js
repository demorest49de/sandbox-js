{
  /**
   * @param {integer} init
   * @return { increment: Function, decrement: Function, reset: Function }
   */
  var createCounter = function (init) {
    let currentValue = init;
    return {
      increment: function () {
        return currentValue += 1;
      },
      decrement: function () {
        return currentValue -= 1;
      },
      reset: function () {
        currentValue = init;
        return currentValue;
      },
    };
  };
  
  const counter = createCounter(5);
  
  console.log(counter.increment());
  console.log(counter.reset());
  console.log(counter.decrement());
  
  /**
   * const counter = createCounter(5)
   * counter.increment(); // 6
   * counter.reset(); // 5
   * counter.decrement(); // 4
   */
}