//Normal String Literals
console.log("We Love Javasript"); 
let instituteName = "Lead Educare";
console.log(instituteName);

//Template Literals       ||  Instead of Single or Double Quote You have to Use Back Tick Symbol
// Inside Back Tick You can write string and variable values as well for variables just us ${variableName}
console.log(`We are learning at ${instituteName}`);

function sum(a,b){
    return a+b;
}
var doSum = true;
for(let x = 5,y = 20 ; x <= 20 ; x += 5, y -= 5){
    let result = `Sum of ${x} + ${y} = ${x+y}`;
    console.log(doSum ? result : "Skipped");
    doSum ? doSum = false : doSum = true;
}