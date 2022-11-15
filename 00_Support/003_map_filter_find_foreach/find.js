const numbers = [10, 20, 30, 40, 50];

//====RETURN THE FIRST MATCH NUMBER GREATER THAN 10 =========
const moreThanTen = numbers.find((number) => number > 10);
//-----------ALTERNATIVE EXPRESSION----------------
const greaterThanTen = numbers.find(number =>{
    return number>10;
});
console.log("More Than Ten    : ", moreThanTen)
console.log("Greater Than Ten : ", greaterThanTen);
// More Than Ten    :  20
// Greater Than Ten :  20

//==== IF NO ELEMENT FOUND THAT IS GREATER THAN 100 WILL RETURN Undefined===
const moreThanHundred = numbers.find((number) => number > 100);
//----------ALTERNATIVE EXPRESSION -----------------
const greaterThanHundred = numbers.find(number => {
    return number>100;
});
console.log("More Than Hundred    : ", moreThanHundred);
console.log("Greater Than Hundred : ", greaterThanHundred);
// More Than Hundred    :  undefined
// Greater Than Hundred :  undefined
