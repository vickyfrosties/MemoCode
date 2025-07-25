import { MongoClient, ObjectId } from "mongodb";

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

// * - lire une note,
export async function getNoteById(request, response) {
  const noteId = request.params.id;
  console.log(noteId);

  const client = new MongoClient(process.env.ATLAS_URI);
  try {
    const collection = client.db("memocode").collection("notes");

    const myNote = collection.find({ _id: new ObjectId(noteId) });

    const result = await myNote.toArray();

    return response.status(200).json({
      message: response.message,
      success: true,
      body: result,
    });
  } catch (error) {
    console.error("Something went wrong", error.message);

    return response.status(500).json({
      message: "Note by id cannot be choose",
      error: error.message,
      success: false,
    });
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
  console.log("Nouvelle note ajoutée :", newNote);

  const client = new MongoClient(process.env.ATLAS_URI);

  try {
    await client.connect();
    const notesDb = client.db("memocode");

    const noteCollectionSchema = await notesDb.createCollection("notes");

    const resultWithInsert = await noteCollectionSchema.insertOne(newNote);

    console.log(`Id note : ${result.insertedId}:`, result);
    return response.status(200).json({ message: "Note added successfully !" });
  } catch (error) {
    console.error("Something went wrong :", error);

    response.status(500).json("Server error from post request");
  }
}
// * - supprimer une note spécifique,
export async function deleteNote(request, response) {
  // * Retrieve id from request params
  const id = request.params.id;

  const client = new MongoClient(process.env.ATLAS_URI);

  try {
    if (!id) {
      throw new Error("None id has been found");
    }

    const noteColl = client.db("memocode").collection("notes");
    // * Convert id to match MongoDB ObjectId format and delete it
    const noteToDelete = await noteColl.deleteOne({ _id: new ObjectId(id) });

    console.log("note supprimée :", noteToDelete);

    return response.status(200).json({
      message: `Note id: ${id} has been deleted successfully!`,
      success: true,
    });
  } catch (error) {
    console.error("Something went wrong with DELETE request");
    return response.status(500).json({
      message: "Network error",
      success: false,
      error: error.message,
    });
  }
}
