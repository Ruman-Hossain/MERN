function Calculation(...numbers){
    let sum = 0;
    for( let i of numbers){
        sum = sum + i;
    }
    console.log(sum);
}
Calculation(1,2,3,4,5,6,7,8,9,10);