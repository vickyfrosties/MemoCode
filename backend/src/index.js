import express from "express";
import cors from "cors";
import "dotenv/config";
const app = express();
const PORT = 8000;
const { ATLAS_URI } = process.env.ATLAS_URI;

let corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, PUT, POST, DELETE",
  allowedHeaders: "Content-Type",
};

app.get("/notes", cors(corsOptions), (request, response) => {
  response.sendStatus(200);
});

// TODO : Créer une fonction pour lancer le serveur une fois connecté à la base de données.

app.listen(PORT, () => {
  console.log("Server is running on:", { PORT });
});
