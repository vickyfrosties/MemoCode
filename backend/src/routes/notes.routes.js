//  TODO : Créer les routes pour :
import express from "express";
const router = express.Router();

// * - lire les notes,
router.get("/notes", getNotes());
// * - ajouter une nouvelle note,
router.post("/notes", createNote());
// * - supprimer une note spécifique,
router.delete("/notes/:id", deleteNote());

module.exports = router;
