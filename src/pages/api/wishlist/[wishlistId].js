import { readJson, writeJson } from "@/db/Json"

const handler = async (req, res) => {
  const { wishlistId, username } = req.query

  if (!username) {
    return res.status(400).json({ message: "Username is required" })
  }

  const wishlist = await readJson("wishlists")
  const wishlistUser = wishlist[username]

  if (req.method === "DELETE") {
    const updatedWishlistUser = wishlistUser.filter(
      (item) => item._id !== wishlistId,
    )
    const updatedWishlist = { ...wishlist, [username]: updatedWishlistUser }
    await writeJson("wishlists", updatedWishlist)
    res.status(200).json({ message: "Product removed from wishlist" })
  } else {
    res.setHeader("Allow", ["DELETE"])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

export default handler
