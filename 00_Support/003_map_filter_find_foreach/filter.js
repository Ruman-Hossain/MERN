const items = [
    { name: 'T-shirt plain', price: 9 },
    { name: 'T-shirt print', price: 20 },
    { name: 'Jeans', price: 30 },
    { name: 'Cap', price: 5 }
  ];
//======RETURN OBJECTS WHICH PRICES ARE GREATER THAN 10 ======
const filter = items.filter(item => item.price > 10);
//------------ALTERNATIVE EXPRESSION---------------
const fltr = items.filter(item =>{
    return item.price>10;
});
console.log(" Filter : ", filter);
console.log(" Fltr   : ", fltr);
// Filter :  [ { name: 'T-shirt print', price: 20 }, { name: 'Jeans', price: 30 } ]
// Fltr   :  [ { name: 'T-shirt print', price: 20 }, { name: 'Jeans', price: 30 } ]

// const new = original.filter(function);
// Where new will be our new to use array, original is the source and we pass the function we want to apply.

// So how it looked before?
// Something like this.
let output = [];
for(var i = 0; i < items.length; i++) {
  if (items[i].price > 10) output.push(items[i]);
}
console.log(" Filter Using array : ",output);
// Filter Using array :  [ { name: 'T-shirt print', price: 20 }, { name: 'Jeans', price: 30 } ]
