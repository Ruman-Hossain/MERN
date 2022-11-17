console.log('LOOP----> FOR OF') 
var numbers = [45,87,89,56,32,51,25,188,41,25,98];
for(let number of numbers){
    console.log(number);
}
/* OUTPUT
LOOP----> FOR OF
45
87
89
56
32
51
25
188
41
25
98
*/

console.log('LOOP-------> FOR IN'); 
const len = numbers.length;
for(let i = 0; i < len ; i++){
    console.log(numbers[i]);
}
/* OUTPUT
LOOP-------> FOR IN
45
87
89
56
32
51
25
188
41
25
98
*/
console.log('LOOP-------> FOR IN  || CONTINUE | BREAK'); 
for(let i = 0; i < len ; i++){
    if(numbers[i]<=30)
        continue;
    else if(numbers[i]==188)
        break;
    else
        console.log(numbers[i]);
}
/*OUTPUT: 
45 
87 
89 
56 
32 
51 
*/
const sakib={
    name:"Sakib al hassan",
    age:35,
    isActive:true,
    isAllRounder:true,
    country:"Bangladesh",
    scores:[35,89,65]
}
sakib['isBatsman']=true
console.log(sakib)
/*OUTPUT
{
  name: 'Sakib al hassan',
  age: 35,
  isActive: true,
  isAllRounder: true,
  country: 'Bangladesh',
  scores: [ 35, 89, 65 ],
  isBatsman: true
}
*/
console.log(sakib.country);  //Bangladesh
console.log(`The cricketer name is ${sakib.name}, his age is ${sakib.age}, country is ${sakib['country']}`)
//The cricketer name is Sakib al hassan, his age is 35, country is Bangladesh
console.log(Object.keys(sakib));
console.log(Object.values(sakib));

for(let element in sakib){
    console.log(sakib[element]);
}