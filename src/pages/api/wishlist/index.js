import { readJson, writeJson } from "@/db/Json"

const handler = async (req, res) => {
  const { username } = req.query

  if (!username) {
    return res.status(400).json({ message: "Username is required" })
  }

  const wishlist = await readJson("wishlists")
  const wishlistUser = wishlist[username] || []

  if (req.method === "GET") {
    res.status(200).send(wishlistUser)
  } else if (req.method === "POST") {
    const { product } = req.body
    const productExists = wishlistUser.some((item) => item._id === product._id)

    if (!productExists) {
      wishlistUser.push(product)
      const newWishlist = { ...wishlist, [username]: wishlistUser }
      await writeJson("wishlists", newWishlist)
      res.status(200).json({ message: "Product added to wishlist" })
    } else {
      res.status(409).json({ message: "Product already in wishlist" })
    }
  } else {
    res.setHeader("Allow", ["POST", "GET"])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

export default handler
