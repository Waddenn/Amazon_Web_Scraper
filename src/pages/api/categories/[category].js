import { readJson } from "@/db/Json"

const handler = async (req, res) => {
  const { category } = req.query
  const json = await readJson("top_products_by_category")
  const list = json.filter((item) => item.category === category)

  if (!list) {
    res.status(404).send({ error: "Category not found" })
  }

  if (req.method === "GET") {
    res.send(list)

    return
  }

  res.status(404).send({ error: "Not found" })
}
export default handler
