import { readFile } from 'fs/promises';
import path from 'path';

const getProductList = async (username, minPrice, maxPrice) => {
  const wishlistPath = path.join(process.cwd(), 'wishlists', `${username}.json`);

  let list;
  try {
    const json = JSON.parse(await readFile(wishlistPath, { encoding: 'utf-8' }));

    if (minPrice) {
      list = json.filter(
        (product) =>
          parseFloat(product.price.replace(/[^0-9,]/g, "").replace(",", ".")) >=
          parseFloat(minPrice)
      );
    } else {
      list = json;
    }

    if (maxPrice) {
      list = list.filter(
        (product) =>
          parseFloat(product.price.replace(/[^0-9,]/g, "").replace(",", ".")) <=
          parseFloat(maxPrice)
      );
    }

    list.sort((a, b) => {
      const rankA = parseInt(a.rank.replace('#', ''), 10);
      const rankB = parseInt(b.rank.replace('#', ''), 10);
      return rankA - rankB;
    });
  } catch (error) {
    console.error('Error reading wishlist file:', error);
    list = [];
  }

  return list;
};

export default getProductList;