import express from "express";
import {
  // getNotes,
  // createNote,
  // deleteNote,
  // getNoteById,
  // editNote,
  getDemoNotes,
  getDemoNoteById,
  deleteDemoNote,
  createDemoNote,
  editDemoNote,
} from "../controllers/notes.controller.js";
const notesRouter = express.Router();

// ! Demo Notes
notesRouter.route("/").get(getDemoNotes);
notesRouter.route("/").get(getDemoNoteById);
notesRouter.route("/").delete(deleteDemoNote);
notesRouter.route("/").post(createDemoNote);
notesRouter.route("/").patch(editDemoNote);

// ! Personal Notes
// // * - lire les notes,
// notesRouter.route("/notes").get(getNotes);
// // * - lire une note,
// notesRouter.route("/notes/:id").get(getNoteById);
// // * - ajouter une nouvelle note,
// notesRouter.route("/form").post(createNote);
// // * - supprimer une note spécifique,
// notesRouter.route("/notes/:id").delete(deleteNote);
// // * - modifier une note existante
// notesRouter.route("/form/edit/:id").patch(editNote);

export default notesRouter;
