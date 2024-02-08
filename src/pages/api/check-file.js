// pages/api/check-file.js
import { existsSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';;
import { getProductList_json } from '@/fetchmongodb.mjs';

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), './top_products_by_category.json');

  try {
    if (!existsSync(filePath) || readFileSync(filePath, 'utf8').trim().length === 0) {
      writeFileSync(filePath, JSON.stringify([])); 
      await getProductList_json();
      console.log("Fetching data from Amazon...");
      res.status(200).json({ message: "Data fetched and file created with an empty array." });
    } else {
      res.status(200).json({ message: "File already exists and is not empty." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error processing your request." });
  }
}