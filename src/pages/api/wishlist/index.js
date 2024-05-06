import { readJson, writeJson } from "@/db/Json"

const getWishlist = async (username) => {
  const wishlist = await readJson("wishlists")
  return wishlist[username] || []
}

const toggleWishlistItem = async (username, product) => {
  const wishlist = await readJson("wishlists")
  const userWishlist = wishlist[username] || []
  const productIndex = userWishlist.findIndex(
    (item) => item._id === product._id,
  )

  if (productIndex > -1) {
    userWishlist.splice(productIndex, 1)
    wishlist[username] = userWishlist
    await writeJson("wishlists", wishlist)
    return {
      success: true,
      status: 200,
      message: "Product removed from wishlist",
    }
  } else {
    userWishlist.push(product)
    wishlist[username] = userWishlist
    await writeJson("wishlists", wishlist)
    return { success: true, status: 200, message: "Product added to wishlist" }
  }
}

const handler = async (req, res) => {
  const { username } = req.query

  if (!username) {
    return res.status(400).json({ message: "Username is required" })
  }

  switch (req.method) {
    case "GET":
      const wishlist = await getWishlist(username)
      return res.status(200).json(wishlist)

    case "POST":
      const { product } = req.body
      const result = await toggleWishlistItem(username, product)
      return res.status(result.status).json({ message: result.message })

    default:
      res.setHeader("Allow", ["GET", "POST"])
      return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

export default handler
