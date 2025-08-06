import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import notesRouter from "./routes/notes.routes.js";
import { validateNote } from "./config/validationNotes.js";
dotenv.config();

const app = express();
const originFront = process.env.CLIENT_PORT || 5173;
const originServer = process.env.SERVER_PORT || 8000;

let corsOptions = {
  origin: `http://localhost:${originFront}`,
  methods: ["GET, PUT, POST, DELETE"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
};

//* Middlewares
app.use(cors(corsOptions));
app.use(express.json());

//* Routes
app.use("/", notesRouter);

app.listen(originServer, async () => {
  console.log(`Server is running on PORT ${originServer}`);

  await validateNote();
});
