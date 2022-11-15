const nums = [25,36,37,39,50,57,89,105];

//Change each element doing arithmatic Operation
//Map Operation can be done on Array Only
const doubleIt = nums.map( el => el*2);
console.log("Double ", doubleIt);
/*
 *  Double  [
 *   50,  72,  74,  78,
 *  100, 114, 178, 210
 * ]
*/
const trippleIt = nums.forEach( el => el*3);
console.log("Tripple ",trippleIt);
//TriplIt Undefined

console.log("Original Array " , nums);
/* Original Array  [
 *     25, 36, 37,  39,
 *     50, 57, 89, 105
 *   ]
 */

    //Here products IS AN ARRAY OF Object
const products=[
    {
        id:1,
        name:"mobile",
        price:15000,
        branch:["sylhet","dhaka","chy"]
    },
    {
        id:2,
        name:"dektop",
        price:45000,
        branch:["rajshahi","dhaka","chattagram"]
    },
    {
        id:3,
        name:"laptop",
        price:50000,
        branch:["sylhet","dhaka","chattagram"]
    },
    {
        id:4,
        name:"iphone",
        price:80000,
        branch:["sylhet","dhaka","chattagram"]
    },
]
//OBJECT items value return as an ARRAY using MAP in the ARRAY OF OBJECTS 'products'
const items = products.map(prdct => prdct.name);
console.log("Products Names : ", items); //Products Names :  [ 'mobile', 'dektop', 'laptop', 'iphone' ]

const firstItems = products.map(prdct => prdct.branch[0]);
console.log("First Index Branch Name from each Object : ", firstItems);
//First Index Branch Name from each Object :  [ 'sylhet', 'rajshahi', 'sylhet', 'sylhet' ]

const lastBranch =products.map(product=>product.branch[product.branch.length-1])
console.log("Last Index Branch Name from each Object : ", lastBranch);
//Last Index Branch Name from each Object :  [ 'chy', 'chattagram', 'chattagram', 'chattagram' ]

