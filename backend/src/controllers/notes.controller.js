import { MongoClient, ObjectId } from "mongodb";

// * - lire les notes,
export async function getNotes(request, response) {
  const client = new MongoClient(process.env.ATLAS_URI);
  try {
    const dbConnection = client.db("memocode");
    const notesCollection = dbConnection.collection("notes");

    const dataResult = notesCollection.find();
    const dataArray = await dataResult.toArray();

    if (dataArray.length === 0) {
      throw new Error("There's no current data stored");
    }

    return response.status(200).json({
      message: "Fetch data from request is a success",
      data: dataArray,
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      message: "Network error",
      error: error.message,
    });
  } finally {
    await client.close();
  }
}

// * - lire une note,
export async function getNoteById(request, response) {
  const noteId = request.params.id;

  if (!ObjectId.isValid(noteId)) {
    return response.status(400).json({
      message: "Invalid ID format",
      success: false,
    });
  }

  const client = new MongoClient(process.env.ATLAS_URI);

  try {
    const notesCollection = client.db("memocode").collection("notes");

    const note = await notesCollection.findOne({ _id: new ObjectId(noteId) });

    if (!note) {
      return response.status(404).json({
        message: "This memo doesn't exist ;(",
        success: false,
      });
    }

    return response.status(200).json({
      success: true,
      data: note,
    });
  } catch (error) {
    return response.status(500).json({
      message: "Note by id cannot be choose",
      error: error.message,
      success: false,
    });
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

    const noteCollectionSchema = await notesDb.createCollection("notes");

    if (!newNote) {
      throw new Error("No notes were catched");
    }
    const noteToCreate = await noteCollectionSchema.insertOne(newNote);

    return response
      .status(200)
      .json({ message: "Note added successfully !", success: true });
  } catch (error) {
    response.status(500).json({
      message: "Network error",
      success: false,
      error: error.message,
    });
  } finally {
    await client.close();
  }
}

// * - supprimer une note spécifique,
export async function deleteNote(request, response) {
  // * Retrieve id from request params
  const id = request.params.id;

  const client = new MongoClient(process.env.ATLAS_URI);

  try {
    const noteColl = client.db("memocode").collection("notes");
    // * Convert id to match MongoDB ObjectId format and delete it
    if (!ObjectId.isValid) {
      throw new Error("ObjectId format is not valid, id must be a string");
    }
    const noteToDelete = await noteColl.deleteOne({ _id: new ObjectId(id) });

    return response.status(200).json({
      message: `Note with id: ${id} has been deleted successfully!`,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      message: "Network error",
      success: false,
      error: error.message,
    });
  } finally {
    await client.close();
  }
}
