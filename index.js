function purchasingBook(book, discount, tax) {
  const {price, name} = book
  let {available} = book
  const discountAmount = discount / 100 * price
  const taxAmount = tax / 100 * price
  const priceAfterDiscount = price - discountAmount
  available = false
  
  console.log(`nama buku: ${name}`)
  console.log(`harga awal: ${price}`)
  console.log(`${available}`)
  console.log(`Amount of discount\t: ${discount}%`)
  console.log(`Price after discount\t: ${priceAfterDiscount}`)
  console.log(`Amount of tax\t\t: ${tax}%`)
  console.log(`Price after tax\t\t: ${priceAfterDiscount + taxAmount}`)
}
const book = {
  name: "Angular Book",
  price: 10000,
  available: true
}

purchasingBook(book, 50, 10)