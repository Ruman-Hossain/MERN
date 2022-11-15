const items = [
    { name: 'T-shirt plain', price: 9 },
    { name: 'T-shirt print', price: 20 },
    { name: 'Jeans', price: 30 },
    { name: 'Cap', price: 5 }
];

//Both Implementations are Similar
const itemPrices = items.map(item => item.price);
// ----------- ALTERNATIVE EXPRESSION------------
const prices = items.map(item=>{
    return item.price;
});
console.log("Item Prices : ",itemPrices);
console.log("Prices      : ", prices);
// Item Prices :  [ 9, 20, 30, 5 ]
// Prices      :  [ 9, 20, 30, 5 ]



//=============MAP CONCATENATE OR JOINING========
const users = [
    { firstname: 'Louise', lastname: 'Belcher' },
    { firstname: 'Bob', lastname: 'Belcher' },
    { firstname: 'Tina', lastname: 'Belcher' },
    { firstname: 'Jimmy', lastname: 'Pesto' }
];
const UserFullName = users.map(item => `${item.firstname} ${item.lastname}`);
// ----------- ALTERNATIVE EXPRESSION------------
const fullNames = users.map(item => {
    return `${item.firstname} ${item.lastname}`;
});
console.log("User Full Name : ", UserFullName);
console.log("Full Name      : ", fullNames);
// User Full Name :  [ 'Louise Belcher', 'Bob Belcher', 'Tina Belcher', 'Jimmy Pesto' ]
// Full Name      :  [ 'Louise Belcher', 'Bob Belcher', 'Tina Belcher', 'Jimmy Pesto' ]