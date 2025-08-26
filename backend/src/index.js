import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import notesRouter from "./routes/notes.routes.js";
import { validateDemoNote, validateNote } from "./config/validationNotes.js";
dotenv.config();

const app = express();
const originFront = process.env.CLIENT_PORT || 5173;
const prod = process.env.PORT || 8000;

let corsOptions = {
  origin: `http://localhost:${originFront}`,
  methods: ["GET, PUT, POST, DELETE, PATCH"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
};

//* Middlewares
app.use(cors(corsOptions));
app.use(express.json());

//* Routes
app.use("/", notesRouter);

app.listen(prod, async () => {
  console.log(`Server is running on PORT ${prod}`);

  await validateNote();
  await validateDemoNote();
});
