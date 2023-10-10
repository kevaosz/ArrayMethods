const items = [
    { name: 'Bike', price: 600     },
    { name: 'TV', price: 1000      },
    { name: 'Notbook', price: 500  },
    { name: 'Chocolate', price: 15 },
    { name: 'Water', price: 5      }
]

const itemNames = items.map((item) => {
    return item.name
})

console.log(itemNames)

const itemPrices = items.map((item) => {
    return item.price
})

console.log(itemPrices)
