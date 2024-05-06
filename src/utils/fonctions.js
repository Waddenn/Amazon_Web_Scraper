export const productListFilter = (productList, minPrice, maxPrice) => {
  let productListFilted = [...productList]

  if (minPrice) {
    productListFilted = productListFilted.filter(
      (product) =>
        parseFloat(product.price.replace(/[^0-9,]/gu, "").replace(",", ".")) >=
        parseFloat(minPrice),
    )
  }

  if (maxPrice) {
    productListFilted = productListFilted.filter(
      (product) =>
        parseFloat(product.price.replace(/[^0-9,]/gu, "").replace(",", ".")) <=
        parseFloat(maxPrice),
    )
  }

  productListFilted.sort((a, b) => {
    const rankA = parseInt(a.rank.replace("#", ""), 10)
    const rankB = parseInt(b.rank.replace("#", ""), 10)

    return rankA - rankB
  })

  return productListFilted
}
