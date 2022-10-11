function purchasingBook(book, discount, tax) {
  const discountAmount = discount / 100 * book.price
  const taxAmount = tax / 100 * book.price
  const {price, name} = book
  const isName = name !== "";//true

  console.log(isName)
  console.log(`Amount of discount: ${discount}%`)
  console.log(`Price after discount: ${price - discountAmount}`)
  console.log(`Amount of tax: ${tax}%`)
  console.log(`Price after tax: ${price - taxAmount}`)
}
const book = {
  name: "Angular Book",
  price: 25000
}

purchasingBook(book, 40, 11)