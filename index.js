// import express from "express";
// import { users } from "./users.js";
// const app = express();
// const port = 8000;

// app.get("/", (request, response) => {
//   response.send({
//     data: users,
//   });
// });

// app.get("/api", (request, response) => {
//   response.send({
//     success: true,
//     data: `Hello ${request.originalUrl}`,
//   });
// });

// app.get("/:id", (request, response) => {
//   console.log(request.params);
//   const { id } = request.params;
//   const user = users.filter((user) => user.id == id);
//   response.send({
//     data: user,
//   });
// });

// app.post("/", (request, response) => {
//   response.send({
//     success: true,
//     data: {
//       name: "orgil",
//       method: request.method,
//     },
//   });
// });

// app.put("/", (request, response) => {
//   response.send({
//     success: true,
//     data: {
//       name: "orgil",
//       method: request.method,
//     },
//   });
// });

// app.delete("/", (request, response) => {
//   response.send({
//     success: true,
//     data: {
//       name: "orgil",
//       method: request.method,
//     },
//   });
// });

// app.listen(port, () => {
//   console.log(`Server running ${port}`);
// });



// let array = [1,2,3,4,1,2,3,4];

// let newArray = array.filter((i, index) => {
//     return array.indexOf(i) === index;
// });

// console.log(newArray);











// function remove(arr) {
// var newArray = [];
// for(let i=0; i < arr.length; i++){  
//     if(newArray.indexOf(arr[i]) === -1) {  
//         newArray.push(arr[i]);  
//     }  
// }
// return newArray;
// }
// console.log(remove([1,2,3,4,1,2,3,4]));



// function checkPalindrome(string){
//   const arrayValues = string.split('')
//   const reverseArrayValues =  arrayValues.reverse();
//   const reverseStringValues = reverseArrayValues.join('')
//   if(string === reverseStringValues){
//     console.log('true')
//   }else{
//     console.log('false')
//   }
// }
// checkPalindrome("hah")





// let text = "agaa"
// let newText = "";
// for(let i = text.length-1; i>=0; i--){
//   newText+=text[i]
// }
// if(newText==text){
//   console.log("yes");
// }else{
//   console.log("no");
// }






const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b-a});
console.log(points)



// let array = [1, 10, 5];
// let newArray = [];
// let min = -10000000000;
// for(let i = 0; i<=array.length; i++){
//       if(array[i]>min){
//         min = array[i];
        
//       }
// }
// console.log(newArray)