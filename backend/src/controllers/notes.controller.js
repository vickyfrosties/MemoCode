import { MongoClient } from "mongodb";

// * - lire les notes,
export async function getNotes(request, response) {
  const client = new MongoClient(process.env.ATLAS_URI);
  try {
    await client.connect();

    const dbConnection = client.db("sample_mflix");
    const notesCollection = dbConnection.collection("movies");

    const dataResult = notesCollection.find();
    const dataArray = (await dataResult.toArray()).slice(0, 5);

    if (dataArray.length === 0) {
      return response.status(404).json({ message: "No data is available" });
    }

    return response.status(200).json({
      message: "Fetch data from request is a success :D",
      data: dataArray,
    });
  } catch (error) {
    console.error("erreur lors de la requête getNotes", error);
    return response.status(500).json({ message: "Error while fetch request" });
  } finally {
    await client.close();
  }
}

// * - ajouter une nouvelle note,
// * - supprimer une note spécifique,
