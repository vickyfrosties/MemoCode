import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const client = new MongoClient(process.env.ATLAS_URI);
let db;

export async function connectDb() {
  try {
    if (!db) {
      await client.connect();
      console.log("MongoDB is connected!");
      db = client.db("memocode");
    }
    return db;
  } catch (error) {
    console.error("Connection to database has failed.", error);
    throw new Error("Connection to database has failed.", error);
  }
}
