import express from "express";
const notesRouter = express.Router();

// * - lire les notes,
notesRouter.get("/notes", getNotes());
// * - ajouter une nouvelle note,
notesRouter.post("/notes", createNote());
// * - supprimer une note spécifique,
notesRouter.delete("/notes/:id", deleteNote());

module.exports = notesRouter;
