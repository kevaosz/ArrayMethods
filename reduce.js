const items = [
    { name: 'Bike', price: 300     },
    { name: 'TV', price: 1000      },
    { name: 'Notbook', price: 700  },
    { name: 'Chocolate', price: 15 },
    { name: 'Water', price: 8      }
]

const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)

console.log(total)
