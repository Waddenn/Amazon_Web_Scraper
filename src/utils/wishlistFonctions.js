export const checkWishlist = async (user, productID) => {
  const response = await fetch(`/api/wishlist?username=${user}`)
  const wishlist = await response.json()

  return wishlist.some((item) => item._id === productID)
}
export const toggleWishlist = async (username, product) => {
  const response = await fetch(`/api/wishlist?username=${username}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ product }),
  })

  return response.json()
}
export const handleToggleWishlist =
  (username, product, setIsInWishlist) => async () => {
    if (!username) {
      return
    }

    setIsInWishlist((prevState) => !prevState)
    const result = await toggleWishlist(username, product)

    if (result.success) {
      setIsInWishlist((prevState) => !prevState)
    }
  }
