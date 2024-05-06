export const filterProductList = (productList, minPrice, maxPrice) => {
  let filteredProductList = [...productList]

  filteredProductList.sort((a, b) => {
    const rankA = parseInt(a.rank.replace("#", ""), 10)
    const rankB = parseInt(b.rank.replace("#", ""), 10)
    return rankA - rankB
  })

  if (minPrice || maxPrice) {
    filteredProductList = filteredProductList.filter(
      (product) => product?.price && typeof product.price === "string",
    )
    const sanitizePrice = (price) =>
      parseFloat(price.replace(/[^0-9,]/gu, "").replace(",", "."))

    if (minPrice) {
      const minPriceValue = parseFloat(minPrice)
      filteredProductList = filteredProductList.filter(
        (product) => sanitizePrice(product.price) >= minPriceValue,
      )
    }

    if (maxPrice) {
      const maxPriceValue = parseFloat(maxPrice)
      filteredProductList = filteredProductList.filter(
        (product) => sanitizePrice(product.price) <= maxPriceValue,
      )
    }
  }

  return filteredProductList
}
