import express from "express";
import {
  getNotes,
  createNote,
  deleteNote,
} from "../controllers/notes.controller.js";
const notesRouter = express.Router();

// * - lire les notes,
notesRouter.route("/notes").get(getNotes);
// * - ajouter une nouvelle note,
notesRouter.route("/form").post(createNote);
// * - supprimer une note spécifique,
notesRouter.route("/notes/:id").delete(deleteNote);

export default notesRouter;
