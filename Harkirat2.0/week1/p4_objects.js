//Arrays
// const personArray = ["neeraj", "gaurav", "parth", "vinay","kanishk","manaswini"];
// const genderArray = ["male","male","male","male","male","female"];
// const numberOfUsers = personArray.length;

// for(let i = 0; i < numberOfUsers; i++) {
//     if (genderArray[i] == "male") {
//         console.log(personArray[i]);
//     }
// }

//With Objects : combine values of array
// const users1 = {                         //simple  object 
//     firstName: "Neeraj",
//     gender: "male"
// }
// console.log(users1[gender])

//const users = [1,2,3];                      //array of number
//const users2 = ["Neeraj", "raman"];         //array of string

//array of objects
const allUsers = [
    {
    firstName: "Neeraj",
    gender: "male",
    metadata: {                                 //nested array
      age: 20,
      address: "p562, delhi"
    }
  }, {
    firstName: "Gaurav",
    gender: "male",
    metadata: {
      age: 20,
      address: "G24, delhi"
    }
  }, {
    firstName: "Parth",
    gender: "male",
    metadata: {
      age: 20,
      address: "G24, budh vihar"
    }
  }
  ]
  
  for (let i = 0; i < allUsers.length; i++) {
  if (allUsers[i].gender == "male") {
    //console.log(allUsers[i]["metadata"]["age"]); //either use this
    console.log(allUsers[i].metadata.age);          //simpler method to access the key values in the objects of a nested array of objects
  }
  }