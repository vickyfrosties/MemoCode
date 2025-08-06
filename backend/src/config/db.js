import { MongoClient } from "mongodb";

export async function connectDb() {
  const client = new MongoClient(process.env.ATLAS_URI);

  try {
    await client.connect();
    console.log("MongoDB is connected!");
    return client.db("memocode");
  } catch (error) {
    console.error("Connection to database has failed.", error);
  }
}
