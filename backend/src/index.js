import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import notesRouter from "./routes/notes.routes.js";
dotenv.config();

const app = express();
const originFront = process.env.CLIENT_PORT;

let corsOptions = {
  origin: originFront,
  methods: ["GET, PUT, POST, DELETE"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
};

//* Middlewares
app.use(cors(corsOptions));
app.use(express.json());

//* Routes
app.use("/notes", notesRouter);

// * Fonction asynchrone qui initialise la connexion à la DB MongoDB et démarre le serveur Express si la connexion est réussie.
async function startServer() {
  //* Crée une instance du client MongoDB en utilisant l'URI stockée dans la variable d'environnement
  const client = new MongoClient(process.env.ATLAS_URI);
  try {
    //* Le serveur établit la connexion avec la base de données via l'instance client
    await client.connect();
    console.log("MongoDB is connected!");

    //* Démarre le serveur Express sur le port défini
    app.listen(process.env.SERVER_PORT, () => {
      console.log(`Server is running on PORT ${process.env.SERVER_PORT}`);
    });
  } catch (error) {
    //* Capture les erreurs liées à la connexion MongoDB et les affiche dans la console
    console.error("Erreur de connexion DB :", error);
  }
}

startServer();
