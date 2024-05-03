import { readFile } from "fs/promises"
import path from "path"

const getProductList = async (username, minPrice, maxPrice) => {
  const wishlistPath = path.join(process.cwd(), "wishlists", `${username}.json`)

  // eslint-disable-next-line init-declarations
  let productList

  try {
    const json = JSON.parse(await readFile(wishlistPath, { encoding: "utf-8" }))

    if (minPrice) {
      productList = json.filter(
        (product) =>
          parseFloat(
            product.price.replace(/[^0-9,]/gu, "").replace(",", "."),
          ) >= parseFloat(minPrice),
      )
    } else {
      productList = json
    }

    if (maxPrice) {
      productList = productList.filter(
        (product) =>
          parseFloat(
            product.price.replace(/[^0-9,]/gu, "").replace(",", "."),
          ) <= parseFloat(maxPrice),
      )
    }

    productList.sort((a, b) => {
      const rankA = parseInt(a.rank.replace("#", ""), 10)
      const rankB = parseInt(b.rank.replace("#", ""), 10)

      return rankA - rankB
    })
  } catch (error) {
    console.error("Error reading wishlist file:", error)
    productList = []
  }

  return productList
}

export default getProductList
