function calculateArithmetic(a,b, type) {
    if (type == "add") {            //if its a addition opretaion
    const value = sum(a,b)
    return value;                   //3
    }
    if (type == "minus") {          //if its a subtraction operation
    const value = sub(a,b)
    return value;                   //-1
    }
  }
  
  function sum(num1, num2) {
    return num1 + num2;
  }
  
  function sub(num1, num2) {
    return num1 - num2;
  }
  
  const ans = calculateArithmetic(1,2, "minus");
  console.log(ans);         //-1