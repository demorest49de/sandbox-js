{
  function reversuNumber(argNum) {
    let num = Math.abs(argNum);
    if (num === 0) return num;
    
    const nums = [];
    while (num > 0) {
      const remainder = Math.abs(num) % 10;
      // console.log(`remainder: `, remainder);
      nums.push(remainder);
      num = Math.trunc(num / 10);
      // console.log(`num: `, num);
    }
    const result = Number(nums.join(""));
    return argNum < 0 ? 0 - result : result;
  }
  
  console.log(`-321:`, reversuNumber(-321));
  console.log(`321:`, reversuNumber(321));
  console.log(`0:`, reversuNumber(0));
  console.log(`456:`, reversuNumber(456));
}