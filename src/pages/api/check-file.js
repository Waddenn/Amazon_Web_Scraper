// pages/api/check-file.js
import { existsSync, writeFileSync } from 'fs';
import path from 'path';
import main from '@/db.mjs';

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), '/tmp/top_products_by_category.json');

  try {
    if (!existsSync(filePath)) {
      writeFileSync(filePath, JSON.stringify({}));
      await main();
      console.log("Fetching data from Amazon...");
      res.status(200).json({ message: "Data fetched and file created." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error processing your request." });
  }
}

