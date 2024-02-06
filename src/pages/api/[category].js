import { readFile } from "node:fs/promises";
const handler = async (req, res) => {
  if (req.method === "GET") {
    const category = req.query.category;
    const json = JSON.parse(
      await readFile("./top_products_by_category.json", {
        encoding: "utf-8",
      })
    );
    const list = json[category];
    if (!list) {
      res.status(404).send({ error: "Category not found" });
    }
    res.send(list);
    return;
  }
  res.status(404).send({ error: "Not found" });
};
export default handler;
