import express from "express";
import { getNotes } from "../controllers/notes.controller.js";
const notesRouter = express.Router();

// * - lire les notes,
notesRouter.route("/notes").get(getNotes);
// * - ajouter une nouvelle note,
// notesRouter.post("/notes", createNote);
// * - supprimer une note spécifique,
// notesRouter.delete("/notes/:id", deleteNote);

export default notesRouter;
