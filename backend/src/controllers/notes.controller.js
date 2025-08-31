import { MongoClient, ObjectId } from "mongodb";
import { connectDb } from "../config/db.js";

//#region Demo Notes
// ! Demo Notes
export async function getDemoNotes(request, response) {
  try {
    const db = await connectDb();

    const demoCollection = db.collection(process.env.MONGO_COLLECTION);
    const demoNotes = await demoCollection.find().toArray();

    if (demoNotes.length === 0) {
      return response.status(204).json({
        status: 204,
        message: "No notes are existing.",
        data: [],
        error: "No Content.",
        success: true,
      });
    }
    return response.status(200).json({
      status: 200,
      message: "Memo have been successfully retrieved.",
      data: demoNotes,
      error: null,
      success: true,
    });
  } catch (error) {
    return response.json({
      status: 500,
      message: "An unexpected error occured while retrieving notes.",
      data: null,
      error: error.message,
      success: false,
    });
  }
}

export async function getDemoNoteById(request, response) {
  const id = request.params.id;

  if (!ObjectId.isValid(id)) {
    return response.status(400).json({
      status: 400,
      message: "A field does not match the validation document.",
      data: [],
      error: "Invalid ID format",
      success: false,
    });
  }
  try {
    const db = await connectDb();
    const demoCollection = db.collection(process.env.MONGO_COLLECTION);

    const demoNoteId = await demoCollection.findOne({ _id: new ObjectId(id) });

    const idString = demoNoteId._id;

    if (!demoNoteId) {
      return response.status(404).json({
        status: 404,
        message: "This demo does not exist.",
        data: [],
        error: "No Content.",
        success: false,
      });
    }

    return response.status(200).json({
      status: 200,
      message: "Memo has been retrieved with success.",
      data: demoNoteId,
      error: null,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      status: 500,
      message: "An unexpected error occured while retrieving notes.",
      data: null,
      error: error.message,
      success: false,
    });
  }
}

export async function createDemoNote(request, response) {
  const newDemoNote = {
    title: request.body.title,
    description: request.body.description,
    picture: request.body.picture,
    link: request.body.link,
    category: request.body.category,
  };

  try {
    const db = await connectDb();

    const demoCollection = db.collection(process.env.MONGO_COLLECTION);

    const demoNoteToCreate = await demoCollection.insertOne(newDemoNote);

    return response.status(200).json({
      status: 200,
      message: "Memo has been created with success.",
      data: newDemoNote,
      error: null,
      success: true,
    });
  } catch (error) {
    response.status(500).json({
      status: 500,
      message: "An error occured while created a note.",
      data: null,
      error: error.message,
      success: false,
      description:
        error.errorResponse.errInfo.details.schemaRulesNotSatisfied[0]
          .propertiesNotSatisfied[0].description,
    });
  }
}

export async function deleteDemoNote(request, response) {
  // * Retrieve id from request params
  const id = request.params.id;

  try {
    const db = await connectDb();
    const demoCollection = db.collection(process.env.MONGO_COLLECTION);

    // * Convert id to match MongoDB ObjectId format and delete it
    if (!ObjectId.isValid(id)) {
      return response.status(404).json({
        status: 404,
        success: false,
        message: "Note not found.",
        data: [],
        error: `No note exist with ID: ${id}`,
      });
    }

    const noteToDelete = await demoCollection.deleteOne({
      _id: new ObjectId(id),
    });

    return response.status(200).json({
      status: 200,
      message: "Note has been successfully deleted.",
      data: [],
      error: null,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      status: 500,
      message: "An error occured while created a note.",
      data: [],
      error: error.message,
      success: false,
    });
  }
}

export async function editDemoNote(request, response) {
  const id = request.params.id;

  try {
    const db = await connectDb();

    const demoCollection = db.collection(process.env.MONGO_COLLECTION);

    const noteEdits = await demoCollection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      {
        $set: request.body,
      },
      { returnDocument: "after" }
    );

    return response.status(200).json({
      status: 200,
      message: "Note has been edited with success.",
      data: request.body,
      error: null,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      status: 500,
      message: "An error occured while created a note.",
      data: null,
      error: error.message,
      success: false,
    });
  }
}

//#endregion

//#region Personal notes (not for demo purpose)
// ! Personal Notes
// * - lire les notes,
export async function getNotes(request, response) {
  try {
    const dbConnection = client.db("memocode");
    const notesCollection = dbConnection.collection(
      process.env.MONGO_PERSONAL_COLLECTION
    );

    const dataResult = notesCollection.find();
    const dataArray = await dataResult.toArray();

    if (dataArray.length === 0) {
      return response.status(204).json({
        status: 204,
        message: "No notes yet.",
        data: [],
        error: "No Content.",
        success: true,
      });
    }

    return response.status(200).json({
      status: 200,
      message: "Memo have been successfully retrieved.",
      data: demoNotes,
      error: null,
      success: true,
    });
  } catch (error) {
    return response.json({
      status: 500,
      message: "An unexpected error occured while retrieving notes.",
      data: null,
      error: error.message,
      success: false,
    });
  }
}

// * - lire une note,
export async function getNoteById(request, response) {
  const noteId = request.params.id;

  if (!ObjectId.isValid(noteId)) {
    return response.status(400).json({
      status: 400,
      message: "A field does not match the validation document.",
      data: [],
      error: "Invalid ID format",
      success: false,
    });
  }

  try {
    const notesCollection = client
      .db("memocode")
      .collection(process.env.MONGO_PERSONAL_COLLECTION);

    const note = await notesCollection.findOne({ _id: new ObjectId(noteId) });

    const idString = note._id;

    if (!note) {
      return response.status(404).json({
        status: 404,
        message: "This demo does not exist.",
        data: [],
        error: "No Content.",
        success: false,
      });
    }

    return response.status(200).json({
      status: 200,
      message: "Memo has been retrieved with success.",
      data: demoNoteId,
      error: null,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      status: 500,
      message: "An unexpected error occured while retrieving notes.",
      data: null,
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

  try {
    await client.connect();

    const notesCollection = client
      .db("memocode")
      .collection(process.env.MONGO_PERSONAL_COLLECTION);

    const noteToCreate = await notesCollection.insertOne(newNote);

    return response.status(200).json({
      status: 200,
      message: "Memo has been created with success.",
      data: newDemoNote,
      error: null,
      success: true,
    });
  } catch (error) {
    response.status(500).json({
      status: 500,
      message: "An error occured while created a note.",
      data: null,
      error: error.message,
      success: false,
      description:
        error.errorResponse.errInfo.details.schemaRulesNotSatisfied[0]
          .propertiesNotSatisfied[0].description,
    });
  }
}

// * - supprimer une note spécifique,
export async function deleteNote(request, response) {
  // * Retrieve id from request params
  const id = request.params.id;

  try {
    const noteColl = client
      .db("memocode")
      .collection(process.env.MONGO_PERSONAL_COLLECTION);

    // * Convert id to match MongoDB ObjectId format and delete it
    if (!ObjectId.isValid(id)) {
      return response.status(404).json({
        status: 404,
        success: false,
        message: "Note not found.",
        data: null,
        error: `No note exist with ID: ${id}`,
      });
    }

    const noteToDelete = await noteColl.deleteOne({ _id: new ObjectId(id) });

    return response.status(200).json({
      status: 200,
      message: "Note has been successfully deleted.",
      data: `Id note: ${id}`,
      error: null,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      status: 500,
      message: "An error occured while created a note.",
      data: null,
      error: error.message,
      success: false,
    });
  }
}

export async function editNote(request, response) {
  const id = request.params.id;

  try {
    const db = await connectDb();

    const notesCollection = db.collection(
      process.env.MONGO_PERSONAL_COLLECTION
    );

    const noteEdits = await notesCollection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      {
        $set: request.body,
      },
      { returnDocument: "after" }
    );

    return response.status(200).json({
      status: 200,
      message: "Note has been edited with success.",
      data: request.body,
      error: null,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      status: 500,
      message: "An error occured while created a note.",
      data: null,
      error: error.message,
      success: false,
    });
  }
}

//#endregion
