function purchasingBook(book, discount, tax, buy) {
  const {price, stock} = book
  const discountAmount = discount / 100 * price
  const taxAmount = tax / 100 * price
  let amountPrice = 0
  
 
  console.log("==================================================")
  console.log(`Amount of discount: ${discount}%`)
  console.log(`Price after discount: ${price - discountAmount}`)
  console.log(`Amount of tax: ${tax}%`)
  console.log(`Price after tax: ${price + taxAmount}`)
  console.log("==================================================")
  
  for(let i = 1; i < buy;i++) {
  amountPrice += price
  console.log(`Amount price: ${amountPrice}`)

    if(i > stock) {
      console.log('You cannot purchase again')
      break;
    }
    else{
      console.log('you can purchase again')
  }
}
console.log(`you must pay: Rp ${amountPrice.toLocaleString("id")}`)
console.log(`Sisa Stock: ${stock - buy}`)
console.log("==================================================")
}

const book = {
  name: "Angular",
  price: 25000,
  stock: 5,
  available: true
}


purchasingBook(book, 40, 11, 8)