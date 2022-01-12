"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var name = "Tanvi";
var found = true;
var grade = 88.9;
var surname = "Pandhre";
console.log("How you doin??");
console.log("hehe " + "Time for some fun " + name);
console.log("Name: " + name + " Surname: " + surname + " in grade 10 got " + grade + " is  " + found);
console.log("Hi " + name + " " + surname); /*this is called template string */
// for(let i=0;i<5;i++){
//     console.log(i);
// }
var arr = [1, 2.3, 5, 10.0];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    sum += arr[i];
}
var avg = sum / arr.length;
console.log("The avg is " + avg);
var sportsOne = ["Golf", "cricket", "football"];
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var temp = sportsOne_1[_i];
    if (temp == "cricket")
        console.log(temp + " <<<My fav");
    else {
        console.log(temp + " <<Just another sport");
    }
}
var dynamicArr = ["icecream", "cake", "gulabjamun"];
dynamicArr.push("idli");
dynamicArr.push("wada");
//dynamicArr.pop();
//dynamicArr.reverse();
//dynamicArr.shift();
dynamicArr.sort();
for (var _a = 0, dynamicArr_1 = dynamicArr; _a < dynamicArr_1.length; _a++) {
    var tempFood = dynamicArr_1[_a];
    console.log(tempFood);
}
