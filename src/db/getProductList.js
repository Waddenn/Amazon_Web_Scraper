import { readFile } from "node:fs/promises";

const getProductList = async (category, minPrice, maxPrice) => {
  const json = JSON.parse(
    await readFile("./top_products_by_category.json", { encoding: "utf-8" })
  );

  let list = json.filter((product) => product.category === category);

  if (minPrice) {
    list = list.filter(
      (product) =>
        parseFloat(product.price.replace(/[^0-9,]/g, "").replace(",", ".")) >=
        parseFloat(minPrice)
    );
  }
  if (maxPrice) {
    list = list.filter(
      (product) =>
        parseFloat(product.price.replace(/[^0-9,]/g, "").replace(",", ".")) <=
        parseFloat(maxPrice)
    );
  }

  return list;
};

export default getProductList;
