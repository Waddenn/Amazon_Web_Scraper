import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
const getProductList = async (category) => {
  const uri = process.env.COSMOSDB_CONNECTION_STRING;
  const client = new MongoClient(uri);
  await client.connect();
  const database = client.db("amazon-scrapper");
  const collection = database.collection("produits");
  const list = await collection
    .find({ category: category })
    .project({ _id: 0 })
    .toArray();
  return list;
};
export default getProductList;
