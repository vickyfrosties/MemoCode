const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

let corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, PUT, POST, DELETE",
  allowedHeaders: "Content-Type",
};

app.get("/notes", cors(corsOptions), (request, response) => {
  response.sendStatus(200);
});

app.listen(port, () => {
  console.log("Server is running on:", { port });
});
