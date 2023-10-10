const items = [
    { name: 'Bike', price: 300     },
    { name: 'TV', price: 1000      },
    { name: 'Notbook', price: 700  },
    { name: 'Chocolate', price: 15 },
    { name: 'Water', price: 5      }
]

const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100
})

console.log(hasInexpensiveItems) // true or false
