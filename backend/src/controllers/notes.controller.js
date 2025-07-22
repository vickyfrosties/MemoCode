import { MongoClient } from "mongodb";

// * - lire les notes,
export async function getNotes(request, response) {
  const client = new MongoClient(process.env.ATLAS_URI);
  try {
    await client.connect();

    const dbConnection = client.db("memocode");
    const notesCollection = dbConnection.collection("notes");

    const dataResult = notesCollection.find();
    const dataArray = await dataResult.toArray();

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
export async function createNote(request, response) {
  const newNote = {
    title: request.body.title,
    description: request.body.description,
    picture: request.body.picture,
    link: request.body.link,
    category: request.body.category,
  };

  const client = new MongoClient(process.env.ATLAS_URI);

  try {
    await client.connect();
    const notesDb = client.db("memocode");

    const result = await notesDb.collection("notes").insertOne(newNote);

    console.log(`Id note : ${result.insertedId}:`, result);
    return response.status(200).json({ message: "Note added successfully !" });
  } catch (error) {
    response.status(500).json("Server error from post request");
  }
}
// * - supprimer une note spécifique,
