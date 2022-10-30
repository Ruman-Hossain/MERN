let poorCountry = ["Bangladesh", "Srilangka"];
let richCountry = ["America", "Canada","Italy"];
richCountry = [...poorCountry,"America","Canada","Italy"];
// ["Bangladesh", "Srilangka","America", "Canada","Italy"]
console.log("Rich Country :" + richCountry);

let Pcountry = ["Bangladesh", "Srilangka"];
let Rcountry = ["America", "Canada","Italy"];
Pcountry.push(Rcountry);
// ["Bangladesh", "Srilangka",["America", "Canada","Italy"]]
console.log("P Country : " + Pcountry);

console.log("Rich Country[2] :" + richCountry[2]); // "America"
console.log("P country[2] " + Pcountry[2]); //["America", "Canada","Italy"]