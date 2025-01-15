//write a program to print even numbers in an array!
const ages = [21,22,23,24,25];
sizeOfArray = ages.length;
for(let i = 0; i < sizeOfArray; i++) {
    if (ages[i]%2 == 0) {
        console.log(ages[i]);
    }
}