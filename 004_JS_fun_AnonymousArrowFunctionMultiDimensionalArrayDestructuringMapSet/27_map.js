var myMap = new Map();

myMap.set(1,"Bangladesh");  //Key - Value
myMap.set(2,"India");
myMap.set(3,"Pakistan");
myMap.set(4,"America");

console.log(myMap);     //REUTRNS THE COMPLETE MAY WITH KEY INDEX FORMAT
console.log(myMap.get(1));

for(let val of myMap.keys()){
    console.log("[" + val +"] : "+ myMap.get(val));
}

// if(myMap.has("Pakistan"))
//     console.log("Yes");
// else
//     console.log("No");
//myMap.values()          returns all values from the map
//myMap.keys()            returns all keys from the map
//myMap.get(key)          return key index value of map
//myMap.delete(key)       deletes key index values of map
//myMap.has(key)          checks the key Index  exists in map or not