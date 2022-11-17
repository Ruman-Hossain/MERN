var myData = {firstName: "Ruman",lastName: "Hossain",age:26,city:"Rangpur",country:"Bangladesh"};

for(prop in  myData){
    console.log(prop,":", myData[prop]);
    console.log(prop + ":" + myData[prop]);
}


// while doing concatenation
//DIFFERENCE BETWEEN + OPERATOR AND , COMMA
//Why Output is not same???????????????????   || SPACING DIFFERENT  ||
// + String concatenation without space?
// , string printing but why extra space after each console data?