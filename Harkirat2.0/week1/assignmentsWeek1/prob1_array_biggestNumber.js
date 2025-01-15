//Write a program to print the biggest number in an array
const nums = [20,40,60,10,50,30,5];
let sizeOfArray = nums.length;
let bigNum = 0;
for (let i = 0; i < sizeOfArray; i++) {
    if(bigNum <=nums[i]) {
        bigNum = nums[i];
    }
}
console.log(bigNum);