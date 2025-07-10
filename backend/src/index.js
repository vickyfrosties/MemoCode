import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
const app = express();
const PORT = 8000;
dotenv.config();

let corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, PUT, POST, DELETE",
  allowedHeaders: "Content-Type",
};

app.get("/notes", cors(corsOptions), (request, response) => {
  response.sendStatus(200);
});

//* Fonction asynchrone qui initialise la connexion à la DB MongoDB et démarre le serveur Express si la connexion est réussie.
async function startServer() {
  //* Crée une instance du client MongoDB en utilisant l'URI stockée dans la variable d'environnement
  const client = new MongoClient(process.env.ATLAS_URI);
  try {
    //* Le serveur établit la connexion avec la base de données via l'instance client
    await client.connect();
    console.log("MongoDB connected!");

    //* Démarre le serveur Express sur le port défini
    app.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT}`);
    });
  } catch (error) {
    //* Capture les erreurs liées à la connexion MongoDB et les affiche dans la console
    console.error("Erreur de connexion DB :", error);
  }
}

app.listen(PORT, () => {
  console.log("Server is running on:", { PORT });
});

startServer();
