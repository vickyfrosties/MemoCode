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
notesRouter.route("/notes").get(getDemoNotes);
notesRouter.route("/notes/:id").get(getDemoNoteById);
notesRouter.route("/notes/:id").delete(deleteDemoNote);
notesRouter.route("/form").post(createDemoNote);
notesRouter.route("/form/edit/:id").patch(editDemoNote);

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
