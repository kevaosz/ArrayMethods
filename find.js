const items = [
    { name: 'Bike', price: 300     },
    { name: 'TV', price: 1000      },
    { name: 'Notbook', price: 700  },
    { name: 'Chocolate', price: 15 },
    { name: 'Water', price: 5      }
]

const foundItem = items.find((item) => {
    return item.name === 'Notbook'
})

console.log(foundItem)
