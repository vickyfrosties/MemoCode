import { noteSchema } from "../models/notes.model.js";
import { connectDb } from "./db.js";

export async function validateNote() {
  const db = await connectDb();

  try {
    await db.command({
      collMod: "notes",
      validator: noteSchema.validator,
      validationLevel: "strict",
      validationAction: "error",
    });
  } catch (error) {
    console.log("Failed at validation.", error);
  }
}
