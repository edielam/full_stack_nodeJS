var todos = [
    "bursh teeth",
    "clean room",
    "exercise",
    "study javascript",
    "eat healthy"
];
 var i=0;
 //for (; i < todos.length; i++){
 //    todos[i] = todos[i] + "!";
 //}

 /* var counterOne = 0;
 while (counterOne < 10){
     console.log(counterOne);
     counterOne++;
 } 

 var car = 10;
do {
    console.log("car", car);
    car--;
} while (car> 1); */

todos.forEach(function(n, j){
    console.log(n, j);
})