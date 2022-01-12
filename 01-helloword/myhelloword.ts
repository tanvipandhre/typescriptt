export {};
let name:string= "Tanvi";
let found: boolean = true;
let grade: number = 88.9;
let surname: string = "Pandhre";


console.log("How you doin??");
console.log("hehe "+"Time for some fun " +name);
console.log("Name: "+name+" Surname: "+surname+" in grade 10 got "+grade+" is  "+found);
console.log(`Hi ${name} ${surname}`); /*this is called template string */

// for(let i=0;i<5;i++){
//     console.log(i);
// }

let arr:number[] = [1,2.3,5,10.0];
let sum:number=0;
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
    sum+=arr[i];
}
let avg:number=sum/arr.length;
console.log(`The avg is ${avg}`);

let sportsOne:string[]= ["Golf","cricket","football"];
for(let temp of sportsOne){
    if(temp=="cricket")
    console.log(temp+" <<<My fav");
    else{
        console.log(temp+" <<Just another sport");
    }
}
let dynamicArr:string[] = ["icecream","cake","gulabjamun"];
dynamicArr.push("idli");
dynamicArr.push("wada");
//dynamicArr.pop();
//dynamicArr.reverse();
//dynamicArr.shift();
dynamicArr.sort();
for(let tempFood of dynamicArr){
    console.log(tempFood);
}