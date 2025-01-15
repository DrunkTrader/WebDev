//A callback is a function that is passed as an argument to another function, and is executed (called back) after the completion of some operation.
// 1. Passing a Function as an Argument.
// 2. Execution of Callback: The callback is executed after a certain task (often asynchronous) has been completed.

function sum(num1,num2,funToCall) {         //funToCall -> callback function
    let result = num1 + num2;
    funToCall(result);         //callbacks the function with sum of num1 & num2
  }
  
  function displayResult(data) {
    console.log("The result of the sum is : " + data);
  }
  
  function displayResultPassive(addedValue) {
    console.log("Added result comes out to be : " + addedValue);
  }
  
  //call the main function in passive form
  console.log("--- PASSIVE FORM ---")
  const ans = sum(1,5,displayResultPassive);  //displayResultPassive function as an  argument in sum function. callsback the display func after the sum is calculated.
  
  console.log();    //new line
  
  //call the main function in acitve  form
  console.log("--- ACTIVE FORM ---")
  const activeAns = sum(20,55,displayResult);      //displayResult function as an  argument in sum function. callsback the display func after the sum is calculated.