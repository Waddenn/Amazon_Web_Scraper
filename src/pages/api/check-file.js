import { existsSync, writeFileSync, readFileSync } from "fs"
import path from "path"
import { getProductList_json } from "@/scraper/fetchmongodb.mjs"

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), "./top_products_by_category.json")

  try {
    if (!existsSync(filePath)) {
      writeFileSync(filePath, JSON.stringify({}))
      await getProductList_json()
      res.status(200).json({ message: "Data fetched and file created." })
    } else {
      res.status(200).json({ message: "File already exists." })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error processing your request." })
  }
}
