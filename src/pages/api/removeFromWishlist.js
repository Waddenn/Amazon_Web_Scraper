import { readFile, writeFile } from "fs/promises"
import path from "path"

const handler = async (req, res) => {
  if (req.method !== "DELETE") {
    res.setHeader("Allow", ["DELETE"])

    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  const { productId, username } = req.body

  if (!username) {
    return res.status(400).json({ message: "Username is required" })
  }

  const wishlistPath = path.join(process.cwd(), "wishlists", `${username}.json`)

  try {
    const wishlist = JSON.parse(await readFile(wishlistPath, "utf-8"))
    const updatedWishlist = wishlist.filter((item) => item._id !== productId)

    await writeFile(
      wishlistPath,
      JSON.stringify(updatedWishlist, null, 2),
      "utf-8",
    )
    res.status(200).json({ message: "Product removed from wishlist" })
  } catch (error) {
    console.error("Error removing product from wishlist:", error)
    res.status(500).json({
      message: "Error removing product from wishlist",
      error: error.message,
    })
  }
}

export default handler
