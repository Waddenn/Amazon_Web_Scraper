import { readFile } from "node:fs/promises";
const getProductList = async (category) => {
  const json = JSON.parse(
    await readFile("./top_products_by_category.json", {
      encoding: "utf-8",
    })
  );
  const list = json[category];
  return list;
};
export default getProductList;
