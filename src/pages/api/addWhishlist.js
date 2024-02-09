import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const handler = async (req, res) => {
  if (req.method === "POST") {
    const uri = process.env.COSMOSDB_CONNECTION_STRING;
    const client = new MongoClient(uri);
    try {
      if (!req.body.user || !req.body.product) {
        res.status(404).send("error : field not correct");
        return;
      }
      const { user, product } = req.body;
      await client.connect();
      const database = client.db("amazon-scrapper");
      const collection = database.collection("whishlist");
      await collection.insertOne({ user: user, product: product });
      res.send("Whislist added");
    } catch (error) {
      res.status(400).send(`error : ${error}`);
    } finally {
      await client.close();
    }
  }
};
export default handler;
