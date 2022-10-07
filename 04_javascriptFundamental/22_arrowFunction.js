//ONE TYPE OF ANONYMOUS FUNCTION 

// var myArrow1 = ()=> {
//     console.log("My Arrow Function");
// }
// myArrow1();


// var myArrow2 = (X)=> {
//     console.log(X);
// }
// myArrow2("My Arrow Function Using Parameter");

var myArrow = (...data)=> {
    console.log(data);
}
myArrow(1,2,3,4,5,"Ruman","Hossain");