const items = [
    { name: 'T-shirt plain', price: 9 },
    { name: 'T-shirt print', price: 20 },
    { name: 'Jeans', price: 30 },
    { name: 'Cap', price: 5 }
  ];

  
let prices = [];
items.forEach(item => {
  prices.push(item.price);
});
console.log(prices);
// [ 9, 20, 30, 5 ]
