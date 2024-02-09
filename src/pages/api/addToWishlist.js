// pages/api/addToWishlist.js
import { readFile, writeFile, mkdir } from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { product, username } = req.body;

    if (!username) {
      return res.status(400).json({ message: 'Username is required' });
    }

    const wishlistDir = path.join(process.cwd(), 'wishlists');
    const wishlistPath = path.join(wishlistDir, `${username}.json`);

    try {
      await mkdir(wishlistDir, { recursive: true });

      let wishlist = [];
      try {
        wishlist = JSON.parse(await readFile(wishlistPath, { encoding: 'utf-8' }));
      } catch (err) {
        if (err.code !== 'ENOENT') {
          throw err; 
        }
      }

      const productExists = wishlist.some(item => item._id === product._id);
      if (!productExists) {
        wishlist.push(product);
        await writeFile(wishlistPath, JSON.stringify(wishlist, null, 2), { encoding: 'utf-8' });
        res.status(200).json({ message: 'Product added to wishlist' });
      } else {
        res.status(409).json({ message: 'Product already in wishlist' });
      }
    } catch (error) {
      console.error('Error adding product to wishlist:', error);
      res.status(500).json({ message: 'Error adding product to wishlist', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}