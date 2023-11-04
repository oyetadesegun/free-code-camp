const items = [
    { name: 'Bike', price: 400 },
    { name: '😊', price: 20 },
    { name: 'car', price: 100 },
    { name: 'pumpkin', price: 120 },
    { name: 'lorry', price: 70 },
    { name: 'lion', price: 200 },
]


const filtereditems = items.filter((item) => {
    return item.price <= 100
})
console.log(filtereditems)