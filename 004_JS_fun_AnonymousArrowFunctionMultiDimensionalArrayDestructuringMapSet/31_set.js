var mySet = new Set();

mySet.add("Bangladesh");
mySet.add("India");
console.log("Initial Set Elements\n", mySet);
//OUTPUT { 'Bangladesh', 'India' }

//delete
mySet.delete("India");
console.log("Set Elements after Deleting India \n", mySet);
//OUTPUT { 'Bangladesh' }

//Set clear
mySet.clear();
console.log("Set Size After Clear Operation\n", mySet);
//OUTPUT {}

mySet.add("India");
mySet.add("Pakistan");

//SetSize
console.log("Set Size \n",mySet.size);
//OUTPUT  2

