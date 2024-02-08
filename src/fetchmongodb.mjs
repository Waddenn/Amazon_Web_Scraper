import { MongoClient } from "mongodb";
import { writeFile } from "fs/promises";
import dotenv from "dotenv";
dotenv.config();

export const getProductList_json = async () => {
  const uri = process.env.COSMOSDB_CONNECTION_STRING;
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const database = client.db("amazon-scrapper");
    const collection = database.collection("produits");
    const list = await collection.find().toArray();
    await writeFile(
      "/tmp/top_products_by_category.json",
      JSON.stringify(list, null, 2)
    );
    console.log(
      "Data has been written to top_products_by_category.json successfully"
    );
    return list;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  } finally {
    await client.close();
  }
};
