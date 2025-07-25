import express from "express";
import {
  getNotes,
  createNote,
  deleteNote,
  getNoteById,
} from "../controllers/notes.controller.js";
const notesRouter = express.Router();

// * - lire les notes,
notesRouter.route("/notes").get(getNotes);
// * - lire une note,
notesRouter.route("/notes/:id").get(getNoteById);
// * - ajouter une nouvelle note,
notesRouter.route("/form").post(createNote);
// * - supprimer une note spécifique,
notesRouter.route("/notes/:id").delete(deleteNote);

export default notesRouter;
