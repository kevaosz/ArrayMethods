const items = [
    { name: 'Bike', price: 600     },
    { name: 'TV', price: 1000      },
    { name: 'Notbook', price: 500  },
    { name: 'Chocolate', price: 15 },
    { name: 'Water', price: 5      }
]

const filteredItems = items.filter((item) => {
    return item.price <= 500
})

console.log(items)
console.log(filteredItems)
